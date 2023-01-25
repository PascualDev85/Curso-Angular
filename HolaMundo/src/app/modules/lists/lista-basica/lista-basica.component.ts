import { Component, OnInit } from '@angular/core';

// Ejemplo de una lista de productos
export type Producto = {
  nombre: string;
  precio: number;
  description: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  cargando: boolean = true;
  listaElementos: Producto[] = [
    {
      nombre: "Leche",
      precio: 1.5,
      description: "Leche de vaca"
    },
    {
      nombre: "Pan",
      precio: 0.5,
      description: "Pan de molde"
    },
  ];

  opcion: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  cambiarCargando(): void {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number): void {
    this.opcion = opcionEscogida; // dado que el valor cambia, implica un cambio en los elementos renderizados
  }

}


