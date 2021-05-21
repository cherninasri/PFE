import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CommancemanComponent } from './commanceman/commanceman.component';
import { CommandeComponent } from './commande/commande.component';
import { ContactComponent } from './contact/contact.component';
import { DomaineComponent } from './domaine/domaine.component';
import { ExempleComponent } from './exemple/exemple.component';
import { Exemple1Component } from './exemple1/exemple1.component';
import { AdminService } from './fire/admin.service';
import { SecuriteService } from './fire/securite.service';
import { Securite2Service } from './fire/securite2.service';
import { HomeComponent } from './home/home.component';
import { InscriComponent } from './inscri/inscri.component';
import { LsitecomaComponent } from './lsitecoma/lsitecoma.component';
import { LsitecomantenanComponent } from './lsitecomantenan/lsitecomantenan.component';
import { LsitecontactComponent } from './lsitecontact/lsitecontact.component';
import { LsitereclamationComponent } from './lsitereclamation/lsitereclamation.component';
import { NosprojetComponent } from './nosprojet/nosprojet.component';
import { ProfileComponent } from './profile/profile.component';
import { RecComponent } from './rec/rec.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReferenceComponent } from './reference/reference.component';
import { SavoirComponent } from './savoir/savoir.component';
import { ServicesComponent } from './services/services.component';
import { TablemanComponent } from './tableman/tableman.component';
import { TeamComponent } from './team/team.component';
import { Testing1Component } from './testing1/testing1.component';
import { Testing2Component } from './testing2/testing2.component';
import { Testing3Component } from './testing3/testing3.component';
import { TzstingComponent } from './tzsting/tzsting.component';
import { VoiradminComponent } from './voiradmin/voiradmin.component';

const routes: Routes = [
  {​​​​​ path:'',component:HomeComponent},
  {​​​​​ path:'home',component:HomeComponent}​​​​​,
  {​​​​​ path:'about',component:AboutComponent}​​​​​,
  {​​​​​ path:'services',component:ServicesComponent}​​​​​,
  {​​​​​ path:'references',component:ReferenceComponent}​​​​​,
  {​​​​​ path:'contact',component:ContactComponent}​​​​​,
  {​​​​​ path:'team',component:TeamComponent,canActivate:[Securite2Service]}​​​​​,
  {​​​​​ path:'inscri',component:InscriComponent,canActivate:[Securite2Service]}​​​​​,
  {​​​​​ path:'domaine',component:DomaineComponent}​​​​​,
  {​​​​​ path:'savoir',component:SavoirComponent}​​​​​,
  {​​​​​ path:'exemple',component:ExempleComponent}​​​​​,
  {​​​​​ path:'exemple1',component:Exemple1Component}​​​​​,
  {​​​​​ path:'rec',component:RecComponent}​​​​​,

  {​​​​​ path:'profile',component:ProfileComponent ,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'commande',component:CommandeComponent,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'reclamation',component:ReclamationComponent,canActivate:[SecuriteService]}​​​​​,
 {​​​​​ path:'lsitecoma/:tzsting',component:TzstingComponent,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'inscri/:voiradmin',component:VoiradminComponent,canActivate:[Securite2Service]}​​​​​,
  {​​​​​ path:'commanceman',component:CommancemanComponent,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'lsitecoma',component:LsitecomaComponent ,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'nosprojet',component:NosprojetComponent ,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'lsitecomantenan',component:LsitecomantenanComponent ,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'lsitereclamation',component:LsitereclamationComponent ,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'lsitecontact',component:LsitecontactComponent ,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'lsitecomantenan/:testing1',component:Testing1Component ,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'lsitereclamation/:testing2',component:Testing2Component ,canActivate:[SecuriteService]}​​​​​,
  {​​​​​ path:'lsitecontact/:testing3',component:Testing3Component ,canActivate:[SecuriteService]}​​​​​,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
