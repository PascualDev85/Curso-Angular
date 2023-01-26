import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.scss'],
})
export class ContactsDetailPageComponent implements OnInit {
  id: any | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // vamos a leer el parámetro id de la ruta

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });
  }
}
