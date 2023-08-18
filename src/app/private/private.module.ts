import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../core/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { PrivateRoutingModule } from './private-routing.module';

import { PrivateComponent } from './private.component';
import { CoreModule } from '../core/core.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CrearTrabajadorComponent } from './pages/crear-trabajador/crear-trabajador.component';
import { CrearRegistroComponent } from './pages/crear-registro/crear-registro.component';
import { VerTrabajadoresComponent } from './pages/ver-trabajadores/ver-trabajadores.component';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    HomeComponent,
    PrivateComponent,
    PerfilComponent,
    CrearTrabajadorComponent,
    CrearRegistroComponent,
    VerTrabajadoresComponent,
    FilterPipe
    
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  providers:[]
})
export class PrivateModule { }