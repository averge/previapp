import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {
  nuevaPregunta= new FormGroup(
    {pregunta : new FormControl('', [Validators.required]),
    tipo : new FormControl('', [Validators.required])}
  )
  tiposDePregunta=[{id:1, descripcion:"dos involucrados"}, {id:2, descripcion:"Todos participan"}, {id:3, descripcion:"Un participante"}]

  constructor(public dialogRef: MatDialogRef<PreguntaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  addPregunta(){
    let p=this.nuevaPregunta.value
    if (Array.from(this.nuevaPregunta.value.pregunta)[0]==0){
      p.pregunta=p.pregunta.substring(1)
      p.fire=true
    }else{
      p.fire=false
    }
    this.dialogRef.close(p);
  }
  cancelar(){
    this.dialogRef.close();
  }
  
}
