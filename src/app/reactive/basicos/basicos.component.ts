import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


 /*  miFormulario: FormGroup= new FormGroup({
    nombre      :new FormControl('RTX 4080t'),
    precio      :new FormControl(10),
    existencias :new FormControl(20)
  }) */

  miFormulario:FormGroup=this.fb.group({
    //nombre : ['valor','valor sincronos Tiempo real','valiladores no en tiempo real']
    nombre      :[,[ Validators.required, Validators.minLength(3)],],
    precio      :[,[Validators.min(0), Validators.required]],
    existencias :[,[Validators.min(0), Validators.required] ]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // setvalue no es recomendable, mejor es reset
    this.miFormulario.reset({
      nombre:'RXJS',
      precio:10
    })
  }

  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }


  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }



}
