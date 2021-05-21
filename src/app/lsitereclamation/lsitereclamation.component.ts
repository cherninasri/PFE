import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';

@Component({
  selector: 'app-lsitereclamation',
  templateUrl: './lsitereclamation.component.html',
  styleUrls: ['./lsitereclamation.component.css']
})
export class LsitereclamationComponent implements OnInit {
  dataArry: any;

  constructor(private AuthService:AuthService, private client:ClientService, private fs:AngularFirestore ,private fst: AngularFireStorage, private router:Router) { }

  ngOnInit(): void {
    this.fs.collection("Réclamation").snapshotChanges().subscribe((data)=>{
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
  more(id){
    localStorage.setItem('moredeeee',id)
    this.router.navigate(['lsitereclamation/:testing2']);
  }

}
