import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getItem<T>(key: string): T | null {
    if (this.isBrowser) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  setItem<T>(key: string, value: T): void {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }

  getUser(): any {
    if (!this.isBrowser) return null;
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  setUser(user: any): void {
    if (!this.isBrowser) return;
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser(): void {
    if (!this.isBrowser) return;
    localStorage.removeItem('user');
  }
} 