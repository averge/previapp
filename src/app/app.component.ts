import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'previapp';

  participantes:any=[{nombre:"Loren"},{nombre:"Pedro"}, {nombre:"Willy"}, {nombre:"Fede"}];
  preguntas:any=[{pregunta:"se la chupa a"}, {pregunta:"se coge a la mama de"}];
  nuevaPersona = new FormGroup(
    {nombre : new FormControl('', [Validators.required])}
  )
  nuevaPregunta= new FormGroup(
    {pregunta : new FormControl('', [Validators.required])}
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
    this.pregunta=nombre1 + " " + this.preguntas[randomPregunta].pregunta + " " + this.participantes[randomParticipante2].nombre

  }
}
