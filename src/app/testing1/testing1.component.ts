import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.css']
})
export class Testing1Component implements OnInit {
  dataArry3: { id: string; email: any; name: any; tel: any; message: any; }[];
  veri: string;

  constructor(private fs:AngularFirestore , private router:Router,private client:ClientService) { }

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

      this.veri=localStorage.getItem('moredeee')
  }


  delete(id){
    this.fs.collection("Maintenance").doc(id).delete().then( (a)=>{
      this.router.navigate(['lsitecomantenan'])

})}}
