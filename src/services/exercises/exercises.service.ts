import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Exercise } from '../../models/exercises';
import { CacheService } from '../cache/cache.service';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  private apiUrl = 'https://temp-api/exercises';

  constructor(
    private http: HttpClient,
    private cache: CacheService,
  ) {}

  getExercises(): Observable<Exercise[]> {
    let key = this.apiUrl;

    const source$ = this.http.get<Exercise[]>(this.apiUrl).pipe(
      shareReplay(1), // Важно: делаем HTTP-запрос переиспользуемым
    );

    return this.cache.get(key, source$);
  }
}
