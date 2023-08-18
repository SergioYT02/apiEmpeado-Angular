import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn:'root'
})
export class Trabajadorservice {
  private api=config.apiUrl;
  constructor(private readonly http:HttpClient) {}
  create(body:any){
    return this.http.post(`${this.api}empleados`,body)
  }
  obtener(){
    return this.http.get(`${this.api}empleado-role`)
  }
  obtenerEmpleadoDatos(){
    return this.http.get(`${this.api}empleados`)
  }

}