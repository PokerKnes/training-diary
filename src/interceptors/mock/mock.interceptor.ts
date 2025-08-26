import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { EXERCISES } from '../../assets/mocks/exercises';

// Мок-данные выносим в отдельную константу
const mockData = new Map<string, any>([
  ['https://temp-api/exercises', EXERCISES],
  ['/api/users', getMockUsers()],
  ['/api/workouts', { data: 'Mock workouts' }],
  [
    '/api/auth/login',
    { token: 'mock-jwt-token', user: { id: 1, name: 'Test User' } },
  ],
  // Добавьте другие URL и их мок-данные
]);

export const MockInterceptor: HttpInterceptorFn = (req, next) => {
  // Проверяем, есть ли мок-данные для этого URL
  const mockResponse = mockData.get(req.url);

  if (mockResponse) {
    // Правильное создание HttpResponse
    const response = new HttpResponse({
      status: 200,
      statusText: 'OK',
      body: mockResponse,
    });

    return of(response);
  }

  return next(req);
};

function getMockUsers() {
  return {
    users: [
      {
        id: 1,
        name: 'Иван',
        email: 'ivan@example.com',
        role: 'user',
        createdAt: '2024-01-15',
      },
      {
        id: 2,
        name: 'Мария',
        email: 'maria@example.com',
        role: 'admin',
        createdAt: '2024-01-10',
      },
      {
        id: 3,
        name: 'Алексей',
        email: 'alexey@example.com',
        role: 'user',
        createdAt: '2024-01-08',
      },
    ],
    total: 3,
    page: 1,
  };
}
