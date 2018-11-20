import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(clientes: any, filtraCliente?: any): any {

    //verifica se é undefined
    if(filtraCliente === undefined) return clientes;

    return clientes.filter((cliente) => {
      return cliente.nome.toLowerCase().includes(filtraCliente.toLowerCase());
    })
  }

}
