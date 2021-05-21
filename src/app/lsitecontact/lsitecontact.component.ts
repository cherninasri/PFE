import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-lsitecontact',
  templateUrl: './lsitecontact.component.html',
  styleUrls: ['./lsitecontact.component.css']
})
export class LsitecontactComponent implements OnInit {
  dataArry2: any;

  constructor(private AuthService:AuthService, private client:ClientService, private fs:AngularFirestore ,private fst: AngularFireStorage, private router:Router) { }

  ngOnInit(): void {
    this.fs.collection("contact").snapshotChanges().subscribe((data)=>{
      this.dataArry2=data.map(element=>{
        return{
          id:element.payload.doc.id,
          email:element.payload.doc.data()['email'],
          name:element.payload.doc.data()['name'],
          subjet:element.payload.doc.data()['subjet'],
          message:element.payload.doc.data()['message'],



      }



      })

      })
  }
  more(id){
    localStorage.setItem('moredeeeee',id)
    this.router.navigate(['lsitecontact/:testing3']);
  }

}

