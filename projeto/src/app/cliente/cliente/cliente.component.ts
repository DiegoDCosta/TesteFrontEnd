import { Component, OnInit } from '@angular/core';

import { Clientes } from './clientes';
import { ClientesService } from "./clientes.service";


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

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
