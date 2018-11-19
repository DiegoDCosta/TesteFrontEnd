import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API } from "../../API";
import { Clientes } from "./clientes";



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http:HttpClient
  ) { }

  getClientes(){
    return this.http.get<Clientes[]>(`${API}/clientes.json`);
  }
}
