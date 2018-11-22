import { Component, OnInit } from '@angular/core';
import { PerfilService } from "./perfil.service";

import { Perfil } from "./perfil";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  //recebe o objeto do perfil
  public perfil;

  //recebe a imagem do perfil
  public foto_perfil = "assets/images/foto-perfil.jpg";

  constructor(
    private perfilService: PerfilService
  ) {
   }

  ngOnInit() {
    this.perfilService.getPerfilSelecionado().
    subscribe(
      resp => {
        this.perfil = resp;
        console.log(resp)
      }
    )


  }


}
