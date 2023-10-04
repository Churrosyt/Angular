import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = "superuser"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]

  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("ola")
    //.pop() = remover

  }

  remover(index:number){
    this.produtos.splice(index,1)
    // para poder excluir o elemento a partir do index

  }

}
