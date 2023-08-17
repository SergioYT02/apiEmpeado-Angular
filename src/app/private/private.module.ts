import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { PrivateRoutingModule } from './private-routing.module';

import { PrivateComponent } from './private.component';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations: [
    HomeComponent,
    PrivateComponent,
    
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CoreModule
  ]
})
export class PrivateModule { }