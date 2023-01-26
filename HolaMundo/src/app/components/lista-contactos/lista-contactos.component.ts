import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {


  // creamos una variable para almacenar la lista de contactos
listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  // Suscribirse a un observable (Servcio de Contactos)
  subscription: Subscription | undefined;

  // Inyectactamos en el constructor el servicio de Contactos
  // en el contructor son para inicialización de valores
  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {

    // obtener la lista de contactos que nos devuelve el servicio
    // this.listaContactos = this.contactoService.getContactos();
    this.contactoService.getContactos()
    .then((lista: IContacto[]) => this.listaContactos = lista)
    .catch((error) => console.error(`Ha ocurrido un error al obtener la lista de contactos: ${error}`),)
    .finally(() => console.log('Se ha terminado de obtener la lista de contactos'));


    console.table(this.listaContactos);
  }

  getContacto(id: number) {
    // console.log(`Se va a obtener el contacto con id ${id}`);
    // this.contactoSeleccionado = this.contactoService.getContactoPorId(id);
    this.subscription = this.contactoService.getContactoPorId(id)
    ?.subscribe((contacto: IContacto) => this.contactoSeleccionado = contacto);

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}


