import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import {MatDividerModule} from '@angular/material/divider';
import { ContactComponent } from './contact/contact.component';
import { DoctorTableComponent } from './doctor-table/doctor-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PatientTableComponent } from './patient-table/patient-table.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    SidebarComponent,
    CardComponent,
    HighChartComponent,
    PieChartComponent,
    GalleryComponent,
    DoctorsComponent,
    AppointmentsComponent,
    ContactComponent,
    DoctorTableComponent,
    PatientTableComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    HighchartsChartModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
