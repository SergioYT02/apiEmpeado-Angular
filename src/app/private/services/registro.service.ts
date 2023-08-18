import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn:'root'
})
export class Registroservice {
  private api=config.apiUrl;
  constructor(private readonly http:HttpClient) {}
  create(body:any){
    return this.http.post(`${this.api}registrar-asistencia`,body)
  }
 

}