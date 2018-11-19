export interface Perfil {
    codigo:number;
    nome:string;
    email:string;
    cpf:string;
    endereco:{
      tipo:string;
      logradouro:string;
      numero:string;
      complemento:string;
      bairro:string;
      cidade:string;
      Estado:string;
      Pais:string
  }
}
