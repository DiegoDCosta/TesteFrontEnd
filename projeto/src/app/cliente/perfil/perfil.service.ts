import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Perfil } from "./perfil";
import { API } from "../../API";



@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  public perfil:object;

  constructor(
    private http:HttpClient
  ) { }

  getPerfilSelecionado(){
    return this.http.get<Perfil[]>(`${API}/clienteselecionado.json`);
  }
}
