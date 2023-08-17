import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { CargarComponent } from './components/cargar/cargar.component';
import { NavbarComponent } from './components/navbar/navbar.component';


//componentes

@NgModule({
  declarations: [

  
    CargarComponent,
          NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    RouterModule,
    HttpClientModule,
    CargarComponent,
    NavbarComponent
  ],
  providers:[

  ]
})
export class SharedModule { }