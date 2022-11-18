import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {
  vor=["verdad","reto"]
  pica=["picante","nopicante"]

  nuevaPregunta= new FormGroup(
    {pregunta : new FormControl('', [Validators.required]),
    tipo : new FormControl('', [Validators.required]),
    fire : new FormControl('',[Validators.required])}
  )
  nuevaPreguntaEnJuego= new FormGroup(
    {pregunta : new FormControl('', [Validators.required]),}
  )
  nuevaPreguntaHome= new FormGroup(
    {pregunta : new FormControl('', [Validators.required]),
  juego:new FormControl('', [Validators.required])}
  )
  nuevaPreguntaVR= new FormGroup(
    {pregunta : new FormControl('', [Validators.required]),
    tipo : new FormControl('', [Validators.required]),
    picante: new FormControl([Validators.required])}
  )
  tiposDePregunta=[{id:1, descripcion:"dos involucrados"}, {id:2, descripcion:"Todos participan"}, {id:3, descripcion:"Un participante"}]
    juego=["barquito", "yo nunca"]
    
  constructor(public dialogRef: MatDialogRef<PreguntaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  addPregunta(){
    let p=this.nuevaPregunta.value
    if(p.fire=="true"){p.fire=true}
    else{p.fire=false}
    console.log(p)
    this.dialogRef.close(p);
  }

  addPreguntaEnJuego(){
    let p=this.nuevaPreguntaEnJuego.value
    this.dialogRef.close(p);
  }

  addPreguntaVR(){
   // console.log(this.nuevaPreguntaVR.value)
    this.dialogRef.close(this.nuevaPreguntaVR.value);
  }
  cancelar(){
    this.dialogRef.close();
  }
  addPreguntaHome(){
    let p=this.nuevaPreguntaHome.value
    this.dialogRef.close(p);
  }
}
