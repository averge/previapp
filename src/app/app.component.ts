import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'previapp';
  jugando=false
  htmlcode:string=""
  change=true
  profiles=[ "🥸","😀","😃","😄","😁","😆","🤠","🥳","🤡"]
  tiposDePregunta=[{id:1, descripcion:"dos involucrados"}, {id:2, descripcion:"Todos participan"}, {id:3, descripcion:"Un participante"}]
  participantes:any=[{nombre:"rt1"},{nombre:"rt2"}, {nombre:"mp1"}, {nombre:"mp2"}];
  nosotros:any=[{nombre:"Loren"},{nombre:"Pedro"}, {nombre:"Willy"}, {nombre:"Fede"},{nombre:"Blas"},{nombre:"Augusto"}];
  preguntas:any=[{pregunta:"le da un reto a", tipo:1, fire:true}, {pregunta:"le hace masajes a", tipo:1,fire:true},{pregunta:"Quien la tiene mas grande?", tipo:2, fire:true},{pregunta:"le toca el cula a", tipo:1,fire:true},{pregunta:"elige una prenda con ayuda de", tipo:1,fire:false}, {pregunta:"se sienta por el resto de la ronda encima de", tipo:1,fire:true},
  {pregunta:"Yo nunca he besado al herman@ de un amigo", tipo:2, fire:false},
  {pregunta:"Yo nunca chape despues de haber quebrado", tipo:2, fire:false},
  {pregunta:"Yo nunca menti mi edad para levantarme a alguien", tipo:2, fire:false},
  {pregunta:"Yo nunca estuve con alguien 5 años mayor que yo", tipo:2, fire:false},
  {pregunta:"da catedra de como hacer un buen pt", tipo:3, fire:true},
  {pregunta:"recomienda una pose sexual con funcamentos obvio", tipo:3, fire:true},
  {pregunta:"hace un perro instenso", tipo:3, fire:true},

  {pregunta:"le chupa el dedo de forma sensual a", tipo:1,fire:true},
  {pregunta:"le propone casamiento a", tipo:1,fire:false},
  {pregunta:"le muerde el labio a", tipo:1,fire:true},
  {pregunta:"se saca una prenda", tipo:3, fire:true},
  {pregunta:"todos toman 5 tragos", tipo:2, fire:false}, {pregunta:"Toma 5 tragos", tipo:3, fire:false}, {pregunta:"Toma 10 tragos", tipo:3, fire:false}, {pregunta:"Toma 1 trago", tipo:3, fire:false}, {pregunta:"Hace fondo blanco", tipo:3, fire:false},{pregunta:"Hace un baile sensual", tipo:3, fire:true}, {pregunta:"le da un beso a", tipo:1, fire:true}, {pregunta:"hace twerk contra la pared", tipo:3, fire:true}


];
  nuevaPersona = new FormGroup(
    {nombre : new FormControl('', [Validators.required]),
    })
  nuevaPregunta= new FormGroup(
    {pregunta : new FormControl('', [Validators.required]),
    tipo : new FormControl('', [Validators.required])}
  )
  pregunta=' '
p=""

  addPersona(){
      this.participantes.push(this.nuevaPersona.value);
    
    this.nuevaPersona.reset();
  }

  addPregunta(){
    let p=this.nuevaPregunta.value
    if (Array.from(this.nuevaPregunta.value.pregunta)[0]==0){
      p.pregunta=p.pregunta.substring(1)
      p.fire=true
    }else{
      p.fire=false
    }
    this.preguntas.push(p);
    this.nuevaPregunta.reset();
  }

  next(){
    this.pregunta=''
   this.random()
  }
  random(){
    this.p=""

    this.change=false
    this.jugando=true
    const temp=this.participantes
    this.participantes=[...this.participantes, ...this.nosotros]
    let randomParticipante1 = Math.floor(Math.random() * this.participantes.length);
    let nombre1 =this.participantes[randomParticipante1].nombre
    let randomParticipante2 = Math.floor(Math.random() * this.participantes.length);
    while(randomParticipante1==randomParticipante2){
      randomParticipante2 = Math.floor(Math.random() * this.participantes.length);
    }
    let preguntasTranqui= this.preguntas.filter(
      (pregunta:any) => pregunta.fire==false
    )
    let randomPregunta = Math.floor(Math.random() * preguntasTranqui.length);
    setTimeout(() => {
    if (preguntasTranqui[randomPregunta].tipo==1){
      this.pregunta=nombre1 + " " + preguntasTranqui[randomPregunta].pregunta + " " + this.nosotros[randomParticipante2].nombre
    }
    if (preguntasTranqui[randomPregunta].tipo==2){
      this.pregunta=preguntasTranqui[randomPregunta].pregunta
    }
    if (preguntasTranqui[randomPregunta].tipo==3){
      this.pregunta= nombre1 + " " + preguntasTranqui[randomPregunta].pregunta
    }
  }, 5);
    setTimeout(() => {
      this.p=this.pregunta
    },1000);

    this.participantes=temp
  }
  fire(){
    this.pregunta=''
    this.p=""
    this.fire1()
  }
  fire1(){
    this.change=false
    this.jugando=true
    let preg;
    let randomParticipante1 = Math.floor(Math.random() * this.participantes.length);
    let nombre1 =this.participantes[randomParticipante1].nombre
    let randomParticipante2 = Math.floor(Math.random() * this.nosotros.length);
    randomParticipante2 = Math.floor(Math.random() * this.nosotros.length);
    let preguntasPicantes= this.preguntas.filter(
      (pregunta:any) => pregunta.fire==true
    )
    let randomPregunta = Math.floor(Math.random() * preguntasPicantes.length);
    setTimeout(() => {
    if (preguntasPicantes[randomPregunta].tipo==1){
      this.pregunta=nombre1 + " " + preguntasPicantes[randomPregunta].pregunta + " " + this.nosotros[randomParticipante2].nombre
    }
    if (preguntasPicantes[randomPregunta].tipo==2){
      this.pregunta=preguntasPicantes[randomPregunta].pregunta
    }
    if (preguntasPicantes[randomPregunta].tipo==3){
      this.pregunta= nombre1 + " " + preguntasPicantes[randomPregunta].pregunta
    }
    this.change=true;

    this.htmlcode='<div class="demo1__colored-blocks" name="girar">';
  }, 5);
  setTimeout(()=>{
    this.p=this.pregunta
  },1000)
  console.log(preguntasPicantes)
  }

  

  
}
