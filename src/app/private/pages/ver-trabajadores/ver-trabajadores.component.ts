import { Component } from '@angular/core';
import { Trabajadorservice } from '../../services/trabajador.service';

@Component({
  selector: 'app-ver-trabajadores',
  templateUrl: './ver-trabajadores.component.html',
  styleUrls: ['./ver-trabajadores.component.scss']
})
export class VerTrabajadoresComponent {
  trabajadores!:any
  constructor(private trabajadorService:Trabajadorservice){
    this.trabajadorService.obtenerEmpleadoDatos().subscribe((data:any)=>{
      console.log(data.empleados);
      this.trabajadores=data.empleados;
    })
  }
}
