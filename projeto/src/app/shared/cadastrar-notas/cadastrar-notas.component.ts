import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-notas',
  templateUrl: './cadastrar-notas.component.html',
  styleUrls: ['./cadastrar-notas.component.scss']
})
export class CadastrarNotasComponent implements OnInit {

  //registra o form
  formCadastraNota:FormGroup;
  submitted = false;
  public notas_cadastradas = []

  //máscaras


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    //inicializando o form
    this.formCadastraNota = this.formBuilder.group({
      loja:['', Validators.required],
      numero:['', Validators.required],
      data:['', Validators.required],
      pagamento:['',Validators.required],
      valor:['',Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.formCadastraNota.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.formCadastraNota.invalid) {
        return;
    }

    //coloca os valores na tabela
    this.notas_cadastradas.push(this.formCadastraNota.value);

    //debug
    //console.log(this.formCadastraNota.value);
    //alert('SUCCESSO!! :-)\n\n' + JSON.stringify(this.formCadastraNota.value))

    //limpa o form após o cadastro
    this.formCadastraNota.reset();
  }
}
