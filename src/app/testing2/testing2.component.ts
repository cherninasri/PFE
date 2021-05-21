import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit {
  veri: string;
  dataArry3: { id: string; email: any; name: any; tel: any; message: any; }[];

  constructor(private fs:AngularFirestore , private router:Router,private client:ClientService) { }

  ngOnInit(): void {
    this.fs.collection("Réclamation").snapshotChanges().subscribe((data)=>{
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

      this.veri=localStorage.getItem('moredeeee')
  }


  delete(id){
    this.fs.collection("Réclamation").doc(id).delete().then( (a)=>{
      this.router.navigate(['lsitereclamation'])

})}}
