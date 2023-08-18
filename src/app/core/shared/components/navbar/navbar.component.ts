import { Component } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user!:any
  constructor(private authsErvice:AuthService){
    this.authsErvice.userInformation().subscribe((data)=>{
      console.log(data.user);
      this.user=data.user;
      this.authsErvice.setRol(data.user.rol.nombre_del_rol)
    })
  }
}
