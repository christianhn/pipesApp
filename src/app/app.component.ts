import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Christian hermoso';
  valor: number = 1000;
  obj={
    nombre:'Christian'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

}
