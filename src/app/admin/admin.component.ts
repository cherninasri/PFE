import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from 'protractor';
import { from } from 'rxjs';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';
import {AngularFireUploadTask ,AngularFireStorageReference, AngularFireStorage} from '@angular/fire/storage'
import { url } from 'inspector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dataArry
  task:AngularFireUploadTask
ref:AngularFireStorageReference
persentages
  dataArry1
  dataArry2
  dataArry3
  constructor(private AuthService:AuthService, private client:ClientService, private fs:AngularFirestore ,private fst: AngularFireStorage, private router:Router) { }

  ngOnInit(): void {

    this.fs.collection("reclamation").snapshotChanges().subscribe((data)=>{
this.dataArry=data.map(element=>{
  return{
    id:element.payload.doc.id,
    email:element.payload.doc.data()['email'],
    name:element.payload.doc.data()['name'],
    tel:element.payload.doc.data()['tel'],
    message:element.payload.doc.data()['message'],



}



})

})
this.fs.collection("mantenance").snapshotChanges().subscribe((data)=>{
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
this.fs.collection("commande").snapshotChanges().subscribe((data)=>{
  this.dataArry1=data.map(element=>{
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
    localStorage.setItem('morede',id)
    this.router.navigate(['admin/tzsting']);
  }
  delet(id){
    this.fs.collection("mantenance").doc(id).delete().then( a=>{
      this.router.navigate(['admin'])

    })
  }
  delete1(id){
    this.fs.collection("reclamation").doc(id).delete().then( a=>{
      this.router.navigate(['admin'])

    })
  }

  delete2(id){
    this.fs.collection("contact").doc(id).delete().then( a=>{
      this.router.navigate(['admin'])

    })
  }







}
