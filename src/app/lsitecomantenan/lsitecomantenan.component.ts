import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-lsitecomantenan',
  templateUrl: './lsitecomantenan.component.html',
  styleUrls: ['./lsitecomantenan.component.css']
})
export class LsitecomantenanComponent implements OnInit {
  dataArry3

  constructor(private AuthService:AuthService, private client:ClientService, private fs:AngularFirestore ,private fst: AngularFireStorage, private router:Router) { }

  ngOnInit(): void {
    this.fs.collection("Maintenance").snapshotChanges().subscribe((data)=>{
      this.dataArry3=data.map(element=>{
        return{
          id:element.payload.doc.id,
          email:element.payload.doc.data()['email'],
          name:element.payload.doc.data()['name'],
          tel:element.payload.doc.data()['tel'],
          message:element.payload.doc.data()['message'],



      }



      })

      })

  }

    more(id){
      localStorage.setItem('moredeee',id)
      this.router.navigate(['lsitecomantenan/:testing1']);
    }
}
