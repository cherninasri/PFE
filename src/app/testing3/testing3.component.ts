import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-testing3',
  templateUrl: './testing3.component.html',
  styleUrls: ['./testing3.component.css']
})
export class Testing3Component implements OnInit {

  veri: string;
  dataArry2

  constructor(private fs:AngularFirestore , private router:Router,private client:ClientService) { }

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

      this.veri=localStorage.getItem('moredeeeee')
  }


  delete(id){
    this.fs.collection("contact").doc(id).delete().then( (a)=>{
      this.router.navigate(['lsitecontact'])

})}}
