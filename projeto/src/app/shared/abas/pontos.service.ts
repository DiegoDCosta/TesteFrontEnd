import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pontos } from "./pontos";
import { API } from 'src/app/API';

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  constructor(
    private http: HttpClient
  ) { }

  getPontos(){
    return this.http.get<Pontos[]>(`${API}/pontos.json`);
  }
}
