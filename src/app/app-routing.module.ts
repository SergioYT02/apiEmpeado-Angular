import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/shared/guards/auth.guard';
import { NoLoginGuard } from './core/shared/guards/NoLogin.guard';

//Componentes


//Guard





const routes: Routes = [
  //Rutas Publicas

 {path:'',
 loadChildren:()=> import('./public/public.module').then(m=> m.PublicModule),
  canActivate:[NoLoginGuard] 
},


  //Rutas Privadas

 {
  path: '',
  loadChildren:()=> import('./private/private.module').then(m=> m.PrivateModule),
  canActivate: [AuthGuard]  
},


//Error 404
{path:'**',
    redirectTo:'/',
  pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: [] // Registrar el guardia
})
export class AppRoutingModule { }