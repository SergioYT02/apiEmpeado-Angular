import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  constructor(private authservice:AuthService,private router:Router){
  
  }
  logout(){
    this.authservice.logout().subscribe(data=>{
      this.authservice.deleteRol();
      this.authservice.deleteToken();
      this.router.navigate(['/login']);
     
    });
  }
}
