import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  contador: number = 0;
  funcionando: boolean = true;
  intervalId: any;

  incrementar() {
    if (this.funcionando) {
      this.intervalId = setInterval(() => {
        this.contador++;
      }, 1000);
    }
  }

  pausar() {
    this.funcionando = false;
    clearInterval(this.intervalId); // Detener el intervalo
  }

  reiniciar() {
    this.funcionando = true;
    this.contador = 0;
    clearInterval(this.intervalId); // Detener el intervalo por si acaso
  }

}
