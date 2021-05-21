import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';
import { n } from '../interface/inscri.interface';

@Component({
  selector: 'app-commanceman',
  templateUrl: './commanceman.component.html',
  styleUrls: ['./commanceman.component.css']
})
export class CommancemanComponent implements OnInit {

  envoyer

  constructor(private AuthService:AuthService, private client:ClientService , private router:Router ) { }

  ngOnInit(): void {
  }
  inscription1(b){
    let data : n = b.value
    this.client.addmantenance (firebase.default.auth().currentUser.uid,data.email,data.name,data.tel,data.message).then(()=>{
      this.envoyer="envoyer"
      //window.location.reload()
    }).then( a=>{
      this.router.navigate([''])

    })

  }
}

