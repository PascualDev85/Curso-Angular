import { Injectable } from '@angular/core';

// Impotarta la lista de contactos MOCK

import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

// Importar Observables de rxjs

import { Observable } from 'rxjs';
// los observables son como las promesas pero con la diferencia de que los observables pueden emitir varios valores. Por ejemplo, un observable puede emitir un valor cada segundo, cada 5 segundos, cada 10 segundos, etc. Mientras que una promesa solo puede emitir un valor.

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  getContactos(): Promise<IContacto[]> {
  // getContactos(): Promise<IContacto[]> {
    // return CONTACTOS; // Nos devuelve la lista de contactos

    // Devolver una promesa
    return Promise.resolve(CONTACTOS);
  }

  getContactoPorId(id: number): Observable<IContacto> | undefined {

    // si viene contacto con el id que le pasamos, que lo devuelva y si no, que devuelva un undefined
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto?.id === id);

    // Crear un observable

    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto);// Emite el valor del contacto. COmponente suscrito al observable
      observer.complete(); // No hay más valores que emitir
    });
    if (contacto) {
      return  observable;
    } else {
      return;
    }
  }


}
