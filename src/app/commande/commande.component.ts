import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../fire/auth.service';
import { ClientService } from '../fire/client.service';
import { c, imgarr } from '../interface/inscri.interface';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  envoyer
  im:imgarr;
  img:imgarr[];
  //img:ElementRef<any>;
  @ViewChild('image') image:ElementRef
  constructor(private AuthService:AuthService, private client:ClientService , private router:Router ) {


  }

  ngOnInit(): void {
  }

//getimgdetails(event)
//{ this.img=[];
 // for(var i = 0 ;i<event.target.files.length;i++)
  //{ this.im=new imgarr;
   // this.im.name = event.target.files[i].name;
    //this.im.size = event.target.files[i].size;
   // this.im.type = event.target.files[i].type;
   // this.img.push(this.im);
//------
   //console.log(this.im);
   //img.concat(this.im);
   //this.im.push(img[i])
  // this.img[i].push=<imgarr[]>this.im;
 // this.img[0].push(<imgarr[]>this.im);
  // console.log(this.img);
 // }
 // console.log(this.img);
//}
inscription1(form : NgForm){
  this.img=[];

  for(var i = 0 ;i<(<HTMLInputElement>this.image.nativeElement).files.length;i++)
  {
  //this.im.name = (<HTMLInputElement>this.image.nativeElement).files[i].name;
  //this.im.size = (<HTMLInputElement>this.image.nativeElement).files[i].size;
  //this.im.type = (<HTMLInputElement>this.image.nativeElement).files[i].type;
  console.log(this.im);
  this.img.push((<HTMLInputElement>this.image.nativeElement).files[i]);
}
 console.log(this.im);
 console.log(this.img);
  let name = (<c>form.value).name,
    email=(<c>form.value).email,
    namepiece=(<c>form.value).namepiece,
    tel=(<c>form.value).tel,
    message=(<c>form.value).message,
    image=this.img
//this.img=[];
    //image=this.img


   // image=this.img;
  this.client.addcommande(firebase.default.auth().currentUser.uid,name,email,namepiece,tel,message,image).then(()=>{
    this.envoyer="envoyer"
    //window.location.reload( )
  }).then( a=>{
    this.router.navigate([''])

  })
//console.log(image);
console.log(this.img);
}

}
