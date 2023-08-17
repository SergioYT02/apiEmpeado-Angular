import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CrearRegistroComponent } from './pages/crear-registro/crear-registro.component';
import { CrearTrabajadorComponent } from './pages/crear-trabajador/crear-trabajador.component';
import { VerTrabajadoresComponent } from './pages/ver-trabajadores/ver-trabajadores.component';


//Components

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
        {
            path:'',
            redirectTo:'/home',
            pathMatch:'full'
        },
        {
            path:'home',
            component:HomeComponent
        },
        {
            path:'perfil',
            component:PerfilComponent
        },
        {
            path:'crear-registro',
            component:CrearRegistroComponent
        },
        {
            path:'crear-trabajador',
            component:CrearTrabajadorComponent
        },
        {
            path:'ver-trabajadores',
            component:VerTrabajadoresComponent
        },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}