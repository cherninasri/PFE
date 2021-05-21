import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-nosprojet',
  templateUrl: './nosprojet.component.html',
  styleUrls: ['./nosprojet.component.css']
})
export class NosprojetComponent implements OnInit {

data1
  dataArry2

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
  update(){

    this.fs.collection("Référence").doc(localStorage.getItem('idref')).update({
      date:this.data1



}).then( () => { window.location.reload() })
  }
  delete(id){
    this.fs.collection("Référence").doc(id).delete()


  }

  nasr(id){

 this.fs.collection("Référence").ref.doc(id).get().then((data)=>{
   this.data1=data.data()['date']
   console.log(this.data1,id)
   localStorage.setItem('idref',id)

 })


  }


}
