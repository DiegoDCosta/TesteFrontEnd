import { Component, OnInit } from '@angular/core';

import { Clientes } from './clientes';
import { ClientesService } from "./clientes.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  //recebe os dados do serviço
  public clientes:Clientes[];

  constructor(
    private ClientesService: ClientesService
  ) { }

  ngOnInit() {

    this.ClientesService.getClientes()
    .subscribe(
      resp => {
        this.clientes = resp;
        console.log(resp)
      }
    )
  }

}
