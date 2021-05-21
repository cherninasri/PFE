import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';
import { n } from '../interface/inscri.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    envoyer: string;



    constructor(private AuthService:AuthService, private client:ClientService) { }

    ngOnInit(): void {
    }
    inscription1(b){
      let data : n = b.value
      this.client.contact1 (firebase.default.auth().currentUser.uid,data.email,data.name,data.subjet,data.message).then(()=>{
        this.envoyer="envoyer"
        window.location.reload( )
      })

    }
  }
