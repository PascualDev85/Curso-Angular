import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // exportamos aquellas clases (componenetes, pipes, services, etc) que queremos que sean visibles desde fuera del módulo

    ListaBasicaComponent
  ]
})
export class ListsModule { }
