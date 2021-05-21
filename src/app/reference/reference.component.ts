import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  dataArry2: any;

  constructor(private AuthService:AuthService, private client:ClientService, private fs:AngularFirestore ,private fst: AngularFireStorage, private router:Router) { }

  ngOnInit(): void {
    this.fs.collection("Référence").snapshotChanges().subscribe((data)=>{
      this.dataArry2=data.map(element=>{
        return{
          id:element.payload.doc.id,
          name:element.payload.doc.data()['name'],
          namepiece:element.payload.doc.data()['namepiece'],
          date:element.payload.doc.data()['date'],




      }



      })

      })
  }

}

