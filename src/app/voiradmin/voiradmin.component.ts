import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../fire/auth.service';

@Component({
  selector: 'app-voiradmin',
  templateUrl: './voiradmin.component.html',
  styleUrls: ['./voiradmin.component.css']
})
export class VoiradminComponent implements OnInit {
  dataArry
  email
  constructor(private fs:AngularFirestore ,private a:AuthService) { }

  ngOnInit(): void {
    this.fs.collection("dommande").snapshotChanges().subscribe((data)=>{
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
  }
  password(){
    return this.a.possword(this.email)
  }

}
