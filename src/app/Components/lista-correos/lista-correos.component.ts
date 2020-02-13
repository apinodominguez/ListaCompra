import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];

  constructor() {
    const prod1 = {
      titulo: "Integral con semillas",
      emisor: 'Pan',
      leido: false,
    };
    const prod2 = {
      titulo: "Fruta de temporada",
      emisor: 'Peras',
      leido: false,
    };
    const prod3 = {
      titulo: "Pasta de dientes",
      emisor: 'Colgate',
      leido: false,
    };
    const prod4 = {
      titulo: "muesli con frutos secos",
      emisor: 'Cereales',
      leido: false,
    };
    this.correos = [];
    this.correos.push(prod1);
    this.correos.push(prod2);
    this.correos.push(prod3);
    this.correos.push(prod4);

  }

  ngOnInit() {
  }

}
