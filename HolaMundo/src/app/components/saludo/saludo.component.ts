import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string = 'Anónimo'; // De padre a hijo
  // le estamos diciendo que el name que renderice el componente saludo, lo va a coger de la propiedad name que le pasemos desde el componente padre

  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>(); // De hijo a padre a través de la emisión de un evento
  // le estamos diciendo que el mensajeEmitter que renderice el componente saludo, lo va a coger de la propiedad mensajeEmitter que le pasemos desde el componente padre. El tipo de dato que va a emitir es un string. Esto va hacia arriba (hacia el padre)

  // aplicar estilos dinámicamente a un componente objeto
  myStyle: object = {
    color: 'brown',
    fontSize: '20px',
    fontWeight: 'bold'
  };


  constructor() {}

  ngOnInit(): void {
    // esto es para que se ejecute cuando se carga el componente. Hook
    // instrucciones previas a la carga del componente
    console.log('ngOnInit del componente Saludo');
    // acciones asíncronas

  }


  // modicar el componente
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: El componente Saludo va a cambiar');
    console.log(changes);
  }

  // destruir el componente
  ngOnDestroy(): void {
    console.log('ngOnDestroy: El componente Saludo va a desaparecer del DOM');
  }



  // enventos
  // Ejempplo para gestionar un evento de tipo click en el DOM
  alertaSaludo(): void {
    alert(`Hola, ${this.name}. Alerta despachada desde un click de botón`);
  }

  // enviar mensaje al padre
  enviarMensajePadre(): void {
    this.mensajeEmitter.emit(`Hola, ${this.name}. Mensaje emitido desde el hijo. Despechamos una cadena de texto`);
  }
}

// Orden de ciclo de vida de los componentes:
//? 1. ngOnChanges
//? 2. ngOnInit
// 3. ngDoCheck
// 4. ngAfterContentInit
// 5. ngAfterContentChecked
// 6. ngAfterViewInit
// 7. ngAfterViewChecked
// 8. ngAfterContentChecked
// 9. ngAfterViewChecked
//? 10. ngOnDestroy
