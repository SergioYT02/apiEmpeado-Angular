import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PuestosService } from '../../services/puestos.service';
import { RolesService } from '../../services/roles.service';
import { Trabajadorservice } from '../../services/trabajador.service';

@Component({
  selector: 'app-crear-trabajador',
  templateUrl: './crear-trabajador.component.html',
  styleUrls: ['./crear-trabajador.component.scss']
})
export class CrearTrabajadorComponent {
  roles!:any
  puestos!:any
  constructor(private fb:FormBuilder,
    private readonly router:Router,private puestosservice:PuestosService,private rolesservice:RolesService,private trabajadorService:Trabajadorservice){
      this.puestosservice.obtener().subscribe((data:any)=>{
        console.log(data);
        this.puestos=data.puestos;
      })
      this.rolesservice.obtener().subscribe((data:any)=>{
        console.log(data);
        this.roles=data.roles;
      })
    }
  loginForm!:FormGroup
  ngOnInit():void{
    this.loginForm= this.fb.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      direccion:['',[Validators.required]],
      fecha_contratacion:['',[Validators.required]],
      fecha_nacimiento:['',[Validators.required]],
      puesto_id:['',[Validators.required]],
      rol_id:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    })
  }
  crear(value:any){
    if(this.loginForm.valid){
      const body={
        nombre:value.nombre,
        apellido:value.apellido,
        direccion:value.direccion,
        fecha_nacimiento:value.fecha_nacimiento,
        email:value.email,
        password:value.password,
        rol_id:value.rol_id,
        fecha_contratacion:value.fecha_contratacion,
        puesto_id:value.puesto_id,
      }
      this.trabajadorService.create(body).subscribe((data)=>{
        alert('se creó')
        this.router.navigate(['/ver-trabajadores'])
      })
  }else{
    alert("form no valido")
  }
  }
}
