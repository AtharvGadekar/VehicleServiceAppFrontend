import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token && !isTokenExpired(token)) {
    return true; // Allow navigation
  }

  // Redirect to login if no valid token
  return router.parseUrl('/login');
};

// Helper function to check if JWT is expired
function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch (error) {
    return true; // Consider invalid tokens as expired
  }
};
