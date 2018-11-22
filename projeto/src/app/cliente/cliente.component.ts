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
  public clientes:Clientes;
  public filtraCliente:string;

  constructor(
    private clientesService: ClientesService
  ) {}

  ngOnInit() {

    this.clientesService.getClientes()
    .subscribe(
      resp => {
        this.clientes = resp;
        console.log(resp)
      }
    )


  }

}
