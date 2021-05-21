import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-lsitecoma',
  templateUrl: './lsitecoma.component.html',
  styleUrls: ['./lsitecoma.component.css']
})
export class LsitecomaComponent implements OnInit {
  dataArry

  constructor(private AuthService:AuthService, private client:ClientService, private fs:AngularFirestore ,private fst: AngularFireStorage, private router:Router) { }

  ngOnInit(): void {
    this.fs.collection("Conception").snapshotChanges().subscribe((data)=>{
      this.dataArry=data.map(element=>{
        return{
          id:element.payload.doc.id,
          email:element.payload.doc.data()['email'],
          name:element.payload.doc.data()['name'],
          tel:element.payload.doc.data()['tel'],
          message:element.payload.doc.data()['message'],
          image:element.payload.doc.data()['image'],


      }



      })

      })

  }
  more(id){
    localStorage.setItem('morede',id)
    this.router.navigate(['lsitecoma/:tzsting']);
  }
}
