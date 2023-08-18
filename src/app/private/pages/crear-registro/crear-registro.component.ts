import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trabajadorservice } from '../../services/trabajador.service';
import { Router } from '@angular/router';
import { Registroservice } from '../../services/registro.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.scss'],
})
export class CrearRegistroComponent {
  trabajadores!: any;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private registroservice: Registroservice,
    private trabajadorService: Trabajadorservice,
  ) {
    this.trabajadorService.obtener().subscribe((data:any)=>{
      console.log(data.empleados)
      this.trabajadores=data.empleados;
    })
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      hora_entrada: ['', [Validators.required]],
      hora_salida: ['', [Validators.required]],
      empleado_id: ['', [Validators.required]],
    });
  }
  crear(value: any) {
    if (this.loginForm.valid) {
      const body={

      }
      this.registroservice.create(value).subscribe((data:any)=>{
        
        this.router.navigate(['/ver-trabajadores'])
      })
    } else {
    }
  }
}
