import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'previapp';
  tiposDePregunta=[{id:1, descripcion:"dos involucrados"}, {id:2, descripcion:"Todos participan"}]
  participantes:any=[{nombre:"Loren"},{nombre:"Pedro"}, {nombre:"Willy"}, {nombre:"Fede"}];
  preguntas:any=[{pregunta:"se la chupa a", tipo:1}, {pregunta:"se coge a la mama de", tipo:1},{pregunta:"Quien la tiene mas grande?", tipo:2}];
  nuevaPersona = new FormGroup(
    {nombre : new FormControl('', [Validators.required])}
  )
  nuevaPregunta= new FormGroup(
    {pregunta : new FormControl('', [Validators.required]),
    tipo : new FormControl('', [Validators.required])}
  )
  pregunta=''


  addPersona(){
      this.participantes.push(this.nuevaPersona.value);
    
    this.nuevaPersona.reset();
  }

  addPregunta(){
    this.preguntas.push(this.nuevaPregunta.value);
    this.nuevaPregunta.reset();
  }
  random(){
    let randomParticipante1 = Math.floor(Math.random() * this.participantes.length);
    let nombre1 =this.participantes[randomParticipante1].nombre
    let randomParticipante2 = Math.floor(Math.random() * this.participantes.length);
    while(randomParticipante1==randomParticipante2){
      randomParticipante2 = Math.floor(Math.random() * this.participantes.length);
    }
    let randomPregunta = Math.floor(Math.random() * this.preguntas.length);
    if (this.preguntas[randomPregunta].tipo==1){
      this.pregunta=nombre1 + " " + this.preguntas[randomPregunta].pregunta + " " + this.participantes[randomParticipante2].nombre
    }else{
      this.pregunta= this.preguntas[randomPregunta].pregunta
    }
  }
}
