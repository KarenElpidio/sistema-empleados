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
textoDeRegistro="No hay nadie registrado";
empresa = "Google";

getRegistroUsuario(){
  this.userRegistrado = false;
}

setUsuarioRegistrado(event:Event){

  if((<HTMLInputElement>event.target).value=="si") {
    this.textoDeRegistro= "El usuario se acaba de registrar";
  }else {
    this.textoDeRegistro= "No hay nadie registrado";
}
}

constructor() {}
ngInit(): void {

}
}