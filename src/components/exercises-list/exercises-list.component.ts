import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { catchError, Observable, of, take, tap } from 'rxjs';
import { Exercise } from '../../models/exercises';
import { ExercisesService } from '../../services/exercises/exercises.service';

@Component({
  selector: 'app-exercises-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesListComponent {
  exercises$!: Observable<Exercise[]>;
  exercises2$!: Observable<Exercise[]>;

  constructor(private exService: ExercisesService) {}

  ngOnInit(): void {
    this.loadExercises();
  }

  loadExercises(): void {
    this.exercises$ = this.exService.getExercises().pipe(
      take(1),
      catchError(() => {
        console.error('Ошибка получения списка упражнений');
        return of([]);
      }),
      tap(() => {
        this.exercises2$ = this.exService.getExercises().pipe(
          take(1),
          catchError(() => {
            console.error('Ошибка получения списка упражнений');
            return of([]);
          }),
        );
      }),
    );
  }
}
