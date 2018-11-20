import { Component, OnInit } from '@angular/core';

import { PontosService } from './pontos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-abas',
  templateUrl: './abas.component.html',
  styleUrls: ['./abas.component.scss']
})
export class AbasComponent implements OnInit {

  public pontos:object;

  constructor(
    private pontosService: PontosService,
    public router: Router
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
