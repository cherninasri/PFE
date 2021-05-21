import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage'
import { rejects } from 'assert';
import { resolve } from 'path';
import { promise } from 'protractor';
import { from, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 // arrimg:any[];
  arrimg=[]
  test=[]
  urls:string;
  constructor(private angularfirestore:AngularFirestore , private storage:AngularFireStorage ,private as: AuthService


    ) {

    }



addClient(id,email,tel,name,password) {
  return this.angularfirestore.doc('/User/'+id).set({
   id:id,
   email:email,
    name:name,
    tel:tel ,
    password:password,
    image:'https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg'
  })
}
addClient1(id,name,email,namepiece,tel,message) {

  return this.angularfirestore.doc('/Conception').set({
   id:id,
    name:name,
    email:email,
    namepiece:namepiece,
    tel:tel,
    message:message
  })
}

fff(image){

  return new Promise((resolve, rejects)=>{
      image.forEach((element, i, arr) => {
        this.storage.ref('imagecom/'+element.name).put(element)
        .then((a)=>{
        return a.ref.getDownloadURL().then(async(imageurl)=>{
          this.test.push(imageurl);
          console.log(this.test.length)
          if (this.test.length == arr.length ) {
            console.log(i)
            console.log(arr)
            console.log(this.test)

              await delay(800);
              resolve()


           }
        })
      })
    });
  })
}


addcommande(id,name,email,namepiece,tel,message, image) {
  return this.fff(image).then(()=>{

    this.angularfirestore.collection('Conception').add({
      id:id,
      name:name,
      email:email,
      namepiece:namepiece,
      tel:tel,
      message:message,
      image:this.test
      });
      this.test = [];
  })

}
addreclamaion(id,name,email,tel,message) {
  return this.angularfirestore.collection('/Réclamation').doc().set({
   id:id,
    name:name,
    email:email,
    tel:tel,
    message:message
  })
}
contact1(id,name,email,subjet,message) {
  return this.angularfirestore.collection('/contact').doc().set({
   id:id,
    name:name,
    email:email,
   subjet:subjet ,
    message:message
  })
}
Référence(id,name,namepiece,date) {
  return this.angularfirestore.doc('/Référence/'+id).set({
   id:id,
  name:name,
   namepiece:namepiece,
   date:"AD0300906"
  })
  }
getuserdata(){
  return this. angularfirestore.doc('User/'+this.as.userId).valueChanges()
}
addmantenance(id,name,email,tel,message) {
  return this.angularfirestore.collection('/Maintenance').doc().set({
   id:id,
    name:name,
    email:email,
    tel:tel,
    message:message
  })
}





}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

