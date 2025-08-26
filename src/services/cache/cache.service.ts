import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, any>(); // TODO  заменить any тип, как определюсь с остальными

  constructor() {}

  get<T>(key: string, source$: Observable<T>): Observable<T> {
    const cached = this.getFromCache<T>(key);

    if (cached) {
      return of(cached);
    }

    return source$.pipe(tap((data) => this.setToCache(key, data)));
  }

  /**
   * Получить данные только из кэша
   */
  getFromCache<T>(key: string): T | null {
    const item = this.cache.get(key);

    if (!item) {
      return null;
    }

    return item;
  }

  /**
   * Сохранить данные в кэш
   */
  setToCache<T>(key: string, data: T): void {
    this.cache.set(key, data);
  }
}
