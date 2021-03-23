import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  public contador: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome = "";


  adicionarClique(){
    this.contador++;

    if(this.contador > 20){
      this.contador = 0;
    }

  }

  zerarContador(){
    if(this.contador >= 10){
      this.contador = 0;
    }
  }

  upButton(event: any){
    this.nome = event.target.value;
  }
}
