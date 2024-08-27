import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteNavigationService {
  constructor(private readonly router: Router) {}

  navigate(link: string) {
    this.router.navigate([link]);
  }
}
