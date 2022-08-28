import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  miFormulario:FormGroup=this.fb.group({
    genero          :['M',Validators.required],
    notificaciones  :[true,Validators.required],
    terminos        :[false,Validators.requiredTrue]
  });
  persona={
    genero:'F',
    notificaciones:false
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos:true
    });

/*     this.miFormulario.get('terminos')?.valueChanges.subscribe(resp=>{
      console.log(resp);
    })
 */
    //REACTIVE EXTENCION RXJS
   /*  this.miFormulario.valueChanges.subscribe(form=>{
      delete form.terminos;
      this.persona=form;
    }) */
    this.miFormulario.valueChanges.subscribe(({terminos,...restoArgumentos})=>{
      this.persona=restoArgumentos;
    })
  }

  guardar(){
    const formValue= {...this.miFormulario.value};
    delete formValue.terminos;
    this.persona=formValue;
  }

}
