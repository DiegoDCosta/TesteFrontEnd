import { Component, OnInit } from '@angular/core';

import { Pontos } from "./pontos";
import { PontosService } from './pontos.service';

@Component({
  selector: 'app-abas',
  templateUrl: './abas.component.html',
  styleUrls: ['./abas.component.scss']
})
export class AbasComponent implements OnInit {

  public pontos:Pontos[];

  constructor(
    private pontosService: PontosService
  ) { }

  ngOnInit() {
    this.pontosService.getPontos()
    .subscribe(
      resp => {
        this.pontos = resp;
        console.log(resp);
      }
    )
  }

}
