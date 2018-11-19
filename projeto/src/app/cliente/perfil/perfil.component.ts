import { Component, OnInit } from '@angular/core';

import { PerfilService } from "./perfil.service";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public perfil:object;

  constructor(
    private perfilService: PerfilService
  ) { }

  ngOnInit() {
    this.perfilService.getPerfilSelecionado().
    subscribe(
      resp => {
        this.perfil = resp
        console.log(resp)
      }
    )
  }

}
