import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo:string="disable"
  corFundo:string="blue"
  corDaFonte:string="yellow"
  item:string=""
  lista:string[]=[]
  isEnableBlock:boolean = false

  Mostrar(){
    this.isEnableBlock = true
  }

  adicionarLista(){
    this.lista.push(this.item)
  }

  apagarItem(index:number){
    this.lista.splice(index,1)
  }

  constructor() { }

  ngOnInit(): void {
  }

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable";
    }
    else {
      this.estilo = "disable";
    }
  }



}
