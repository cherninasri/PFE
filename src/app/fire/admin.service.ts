import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { resolve } from 'path';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {
  isUser : boolean
  admin : boolean
  constructor(private as:AuthService , private route:Router,private cs:ClientService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>


  {


    return new Promise (resolve=>{
      this.as.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.as.userId = user.uid;
        this.cs.getuserdata().subscribe(data => {
          if (data['admin']) {
            this.admin = true;
            resolve(true)
          } else{
            this.admin= false
            resolve(false)
            this.route.navigate(['/'])
          }
        });

      } else {
        this.isUser = false;
        this.route.navigate(['/'])

        this.as.userId = '';
        this.admin= false
        resolve(false)
      }

    });










  })




  }
}
