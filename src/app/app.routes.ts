import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('../components/training-choice/training-choice.component').then(
        (m) => m.TrainingChoiceComponent
      ),
  },
  //   {
  //     path: 'about',
  //     loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  //   },
  //   {
  //     path: 'training',
  //     loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  //   },
  //   {
  //     path: 'history',
  //     loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  //   },
  {
    path: 'exercises',
    loadComponent: () =>
      import('../components/exercises-list/exercises-list.component').then(
        (m) => m.ExercisesListComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../components/training-choice/training-choice.component').then(
        (m) => m.TrainingChoiceComponent
      ),
  },
];
