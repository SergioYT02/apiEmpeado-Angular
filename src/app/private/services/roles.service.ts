import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/config/config';

@Injectable({
  providedIn:'root'
})
export class RolesService {
  private api=config.apiUrl;
  constructor(private readonly http:HttpClient) {}
  obtener(){
    return this.http.get(`${this.api}obtener-roles`)
  }
}