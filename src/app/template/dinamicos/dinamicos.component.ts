import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos:Favorito[];
}
interface Favorito{
  id:number,
  nombre:string
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  nuevoJuego:string='';
  constructor() { }

  ngOnInit(): void {
  }

  persona:Persona={
    nombre:'Danny',
    favoritos:[
      {id:1,nombre:'Meat geare'},
      {id:2,nombre:'Top gear'},

    ]
  }

  nombreValid(){
    return this.miFormulario?.controls['nombre']?.invalid && this.miFormulario?.controls['nombre']?.touched;
  }
  agregarValid(){
    return this.miFormulario?.controls['agregar']?.invalid && this.miFormulario?.controls['agregar']?.touched;
  }
  eliminardeFavoritos(index:number){
    this.persona.favoritos.splice(index,1);
  }

  agregarJuego(){
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    console.log(nuevoFavorito);
    console.log({...nuevoFavorito});
    this.nuevoJuego='';


  }





  guardar(){
    console.log('informacion posteada');

  }

}
