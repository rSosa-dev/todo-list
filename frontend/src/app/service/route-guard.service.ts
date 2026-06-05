import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root',
})

export class RouteGuardService implements CanActivate {

  constructor (
    private readonly hardcodedAuthService: HardcodedAuthService,
    private readonly router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.hardcodedAuthService.isUserLoggedIn())
      return true;
    
    this.router.navigate(['login']);
    return false;
  }
}
