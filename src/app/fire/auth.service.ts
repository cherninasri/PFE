import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user : Observable<firebase.default.User>
 userId:string=''
  constructor(private auth:AngularFireAuth) {
    this.user = this.auth.user
  }



inscri(email,password){
  return firebase.default.auth().createUserWithEmailAndPassword(email,password).then( ()=>{
    localStorage.setItem("userrid", firebase.default.auth().currentUser.uid)
  })

}
log(email,password){
return firebase.default.auth().signInWithEmailAndPassword(email,password).then( ()=>{
  localStorage.setItem("userrid", firebase.default.auth().currentUser.uid)
})

}

logout(){
  firebase.default.auth().signOut()


}

possword(email){
  return firebase.default.auth().sendPasswordResetEmail(email)

}
}
