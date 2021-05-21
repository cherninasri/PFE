import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecuriteService implements CanActivate {

  constructor(private as:AuthService , private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>




  {
    return new Promise (res=>{
      this.as.user.subscribe(user=>{
        if (user){
          res(true)
        }
        else{
          this.route.navigate(['home'])
          res(false)
        }

      })
    })
}
  }

