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
  public href:string;
  public verificaHome:boolean = true

  constructor(
    private pontosService: PontosService,
    private router : Router

  ) {

  }

  ngOnInit() {
    this.href = this.router.url;
    if(this.href === '/'){
      this.verificaHome = true
    }
    else{
      this.verificaHome = false
    }

    this.pontosService.getPontos()
    .subscribe(
      resp => {
        this.pontos = resp;
      }
    )

  }

}
