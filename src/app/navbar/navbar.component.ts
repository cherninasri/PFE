import { Component, OnInit } from '@angular/core';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser : boolean = false
  admin: boolean = false
  constructor(private AuthService:AuthService , private cs:ClientService  ){ }

  ngOnInit(): void {

    this.AuthService.user.subscribe(user =>{
      if(user){
        this.isUser = true
        this.AuthService.userId=user.uid
        this.cs.getuserdata().subscribe(data=>{
          if (data['admin']) this.admin=true
        })

      }else{
         this.isUser = false
        this.AuthService.userId=''
        }

    })





  }

  Logout(){
    this.AuthService.logout()
    localStorage.setItem('userrid','')
    this.admin=false

  }


}
