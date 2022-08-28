import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {
  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    favoritos:this.fb.array([
      	['Metal Gear',Validators.required],
        ['Death Straning', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito:FormControl=  this.fb.control('',Validators.required);

  get favoritosARR(){
    return this.miFormulario.get('favoritos') as FormArray 
  }

  agregarFavorito(){
    if(this.miFormulario.invalid){
      return;
    }
   // this.favoritosARR.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosARR.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  eliminarFavorito(index:number){
    this.favoritosARR.removeAt(index);

  }

  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;

  }



  constructor(private fb:FormBuilder) {
  }

  guardar(){
    if(this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }


}
