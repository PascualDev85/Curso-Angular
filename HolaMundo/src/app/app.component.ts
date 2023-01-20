import { Component } from '@angular/core';

@Component({
  // metadatos
  selector: 'app-root', // el nombre de la etiqueta que se va a usar en el index.html
  templateUrl: './app.component.html', // el archivo html que se va a usar
  styleUrls: ['./app.component.scss'], // el archivo css que se va a usar

})
export class AppComponent {
  title = 'HolaMundo'; // esto es una variable que se va a usar en el html
  usuario = '@meta';

  // Esta función se ejecuta cuando en el HIjo (Componente Saludo) se dispara el evento mensajeEmitter
  recibirMensajeDelHijo(evento: string): void {
    alert(evento);
  }
}
