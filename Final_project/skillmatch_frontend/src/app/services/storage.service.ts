import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getItem<T>(key: string): T | null {
    if (this.isBrowser()) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  setItem<T>(key: string, value: T): void {
    if (this.isBrowser()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  removeItem(key: string): void {
    if (this.isBrowser()) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }

  getUser(): any {
    return this.getItem('user');
  }

  setUser(user: any): void {
    this.setItem('user', user);
  }

  removeUser(): void {
    this.removeItem('user');
  }
} 