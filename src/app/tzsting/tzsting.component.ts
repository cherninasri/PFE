import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { k } from '../interface/inscri.interface';
import { ClientService } from '../fire/client.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tzsting',
  templateUrl: './tzsting.component.html',
  styleUrls: ['./tzsting.component.css']
})
export class TzstingComponent implements OnInit {
  dataArry
  rr
veri
  envoyer: string;
  constructor( private fs:AngularFirestore , private router:Router,private client:ClientService) { }

  ngOnInit(): void {
    this.fs.collection("Conception").snapshotChanges().subscribe((data)=>{
      this.dataArry=data.map(element=>{
        return{
          id:element.payload.doc.id,
          email:element.payload.doc.data()['email'],
          name:element.payload.doc.data()['name'],
          namepiece:element.payload.doc.data()['namepiece'],
          tel:element.payload.doc.data()['tel'],
          message:element.payload.doc.data()['message'],
          image:element.payload.doc.data()['image'],

        }



      })

      })

      this.veri=localStorage.getItem('morede')







    }


  delete(id){
    this.fs.collection("Conception").doc(id).delete().then( (a)=>{
      this.router.navigate(['lsitecoma'])

    })
  }
 // <img size="50%" src="{{i}}">
 more(id){
  localStorage.setItem('moredee',id)
  this.router.navigate(['admin/tzsting']);
}
accept(id,name,namepiece){

this.client.Référence(id,name,namepiece,this.rr).then( (a)=>{
  this.router.navigate(['lsitecoma'])

})




}
}



