import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'doctors',component:DoctorsComponent
  },
  {
    path:'appointments',component:AppointmentsComponent
  },
  {
    path:'contact',component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
