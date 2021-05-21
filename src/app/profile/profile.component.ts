import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { url } from 'inspector';
import { threadId } from 'worker_threads';
import { AuthService } from '../fire/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
Uid
data1={
  name :'',
  tel:'',
  email:'',
uid : '',
  image:'',

}
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  constructor( private as:AuthService, private fs:AngularFirestore , private fst:AngularFireStorage) {
    this.as.user.subscribe((user)=>{
      this.Uid=user.uid

    })
   }

  ngOnInit(): void {
    this.fs.collection("User").ref.doc(localStorage.getItem("userrid")).get().then((data)=>{
      this.data1.name=data.data()['name']
      this.data1.email=data.data()['email']
      this.data1.tel=data.data()['tel']
      this.data1.uid=data.data()['id']
      this.data1.image=data.data()['image']
    })





  }
  update(){

    this.fs.collection("User").doc(this.data1.uid).update({
      name:this.data1.name,
      tel:this.data1.tel,
}).then(()=>{ window.location.reload() })

  }

  up(event){
    const id = Math.random().toString(36).substring(2)
    this.ref=this.fst.ref(id)
    this.task=this.ref.put(event.target.files[0])
    this.task.then((data)=>{
      data.ref.getDownloadURL().then(url => {
      this.fs.collection("User").doc(this.data1.uid).update({
        image:url
      })
    })
    })

  }



}
