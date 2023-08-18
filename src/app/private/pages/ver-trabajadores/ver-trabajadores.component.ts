import { Component } from '@angular/core';
import { Trabajadorservice } from '../../services/trabajador.service';

@Component({
  selector: 'app-ver-trabajadores',
  templateUrl: './ver-trabajadores.component.html',
  styleUrls: ['./ver-trabajadores.component.scss']
})
export class VerTrabajadoresComponent {
  term:any
  trabajadores!:any
  constructor(private trabajadorService:Trabajadorservice){
    if(localStorage.getItem('rol')==='Empleado'){
      this.trabajadorService.obtenerInformationTotal().subscribe((data:any)=>{
        this.trabajadores=data.user;
        console.log(data.user);
      })
    }else{

      this.trabajadorService.obtenerEmpleadoDatos().subscribe((data:any)=>{
        console.log(data.empleados);
        this.trabajadores=data.empleados;
      })
    }
  }
}
