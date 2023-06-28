import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(session_key: string,sessionId: any): void {
    localStorage.setItem(session_key, sessionId);
  }

  getSession(session_key: string) {
    return localStorage.getItem(session_key);
  }

  clearSession(session_key: string): void {
    localStorage.removeItem(session_key);
  }

  hasSession(session_key: string): boolean {
    return !!this.getSession(session_key);
  }
}
