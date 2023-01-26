import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {

nombre="Juan"
apellido="Marrubash"
edad= 19;

habilitacionCuadro= false; 
userRegistrado= false;

getRegistroUsuario(){
  this.userRegistrado = true;
}

constructor() {}
ngInit(): void {

}
}