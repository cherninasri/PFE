import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { userInfo } from 'os';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';
import { insc, log } from '../interface/inscri.interface';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent implements OnInit {
  isUser : boolean = false
  erreur
  erreur1
  constructor(private AuthService:AuthService,private client:ClientService , private router:Router , private fs:AngularFirestore) { }

  ngOnInit(): void {

     this.AuthService.user.subscribe(user =>{
       if(user){
         this.isUser = true

       }else{ this.isUser = false}
     })




  }



  inscription(form){
    let data : insc = form.value
    this.AuthService.inscri(data.email,data.password).then( ()=> {
      this.client.addClient(firebase.default.auth().currentUser.uid,data.email,data.tel,data.name,data.password)
    }).then(()=>{
      this.router.navigate([''])
    }) .catch( err => {
      this.erreur1 = err.message
      console.log(this.erreur1)

    }).then(()=>{ window.location.reload() })


  }


  log(form){
    let data : log = form.value
    this.AuthService.log(data.email,data.password)
    .then((user)=>{
      this.router.navigate([''])

    })
   .catch( err => {
      this.erreur = err.message



    }).then(()=>{ window.location.reload() })

  }

}
