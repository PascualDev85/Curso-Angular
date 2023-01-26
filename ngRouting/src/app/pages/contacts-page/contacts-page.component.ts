import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';


@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {


  listaContactos: IContacto[] = [
    {
      id: 0,
      nombre: 'Pepe',
      apellidos: 'Pérez Pérez',
      email: 'per@per.com',
    },
    {
      id: 1,
      nombre: 'Juan',
      apellidos: 'García García',
      email: 'grc@gra.com',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


