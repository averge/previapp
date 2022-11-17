import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ParticipanteComponent } from './new/participante/participante.component';
import { PreguntaComponent } from './new/pregunta/pregunta.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  showJugadores=true
  vr=''
  vrFire=false
  title = 'previapp';
  jugando=false
  modo=""
  htmlcode:string=""
  profiles=[ "🥸","😀","😃","😄","😁","😆","🤠","🥳","🤡"]
  tiposDePregunta=[{id:1, descripcion:"dos involucrados"}, {id:2, descripcion:"Todos participan"}, {id:3, descripcion:"Un participante"}]
  participantes:any=[{nombre:"Marti"},{nombre:"Pili"}, {nombre:"Mili"}, {nombre:"Agus"}];
  nosotros:any=[{nombre:"Loren"},{nombre:"Pedro"}, {nombre:"Willy"}, {nombre:"Fede"},{nombre:"Blas"}];
  preguntas:any=[{pregunta:"le da un reto a", tipo:1, fire:true}, {pregunta:"le hace masajes a", tipo:1,fire:true},{pregunta:"Quien la tiene mas grande?", tipo:2, fire:true},{pregunta:"le toca el culo a", tipo:1,fire:true},{pregunta:"elige una prenda con ayuda de", tipo:1,fire:false}, {pregunta:"se sienta por el resto de la ronda encima de", tipo:1,fire:true},
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
constructor( public dialog: MatDialog) {}
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
    if (this.modo=="mayormenor"){
      this.randomMayorMenor()
    }
    if (this.modo=="modoJugar"){
      if(this.vrFire){
        this.fire1()
      }else{
      this.random()
    }
    }
    if (this.modo=="nombreAleatorio"){
      this.randomName()
    }
    if (this.modo=="barquito"){
      this.barquito()
    }
    if (this.modo=="yoNunca"){
      this.yoNunca()
    }
  }
  random(){
    this.modo="modoJugar"
    this.p=""
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
    this.vrFire=!this.vrFire
    if (this.modo=="modoJugar"){
      //this.pregunta=''
      //this.p=""
      //this.fire1()
    }
  }
  fire1(){
    this.pregunta=''
      this.p=""
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

    this.htmlcode='<div class="demo1__colored-blocks" name="girar">';
  }, 5);
  setTimeout(()=>{
    this.p=this.pregunta
  },1000)
  }

  

  nuevopj(){
    const dialogRef = this.dialog.open(ParticipanteComponent, {
      disableClose: true,
      panelClass: 'js-dialog',  data: {}   
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }else{
        console.log(result)
    if (Array.from(result.nombre)[0]==0){
      this.nosotros.push({nombre:result.nombre.substring(1)})
    }else{
      this.participantes.push({nombre:result.nombre})
    }
  }
      });
  }

  nuevaPreg(){
    const dialogRef = this.dialog.open(PreguntaComponent, {
      disableClose: true,
      panelClass: 'js-dialog',  data: {}   
    });
    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }else{
        console.log(result)
        this.preguntas.push(result);
      }
      });
    }
    mayormenor(){
      this.modo="mayormenor"
      this.jugando=true
      this.randomMayorMenor()
    }

    randomMayorMenor(){
      this.p=""

      this.jugando=true
      setTimeout(() => {
        this.pregunta=(Math.floor(Math.random()*12)).toString()
    }, 5);
      setTimeout(() => {
        this.p=this.pregunta
      },1000);
    }
    randomName(){
      this.modo="nombreAleatorio"
      this.p=""

      let nombre=[...this.participantes, ...this.nosotros]
      this.jugando=true
      setTimeout(() => {
        this.pregunta=nombre[Math.floor(Math.random()*nombre.length)].nombre
    }, 5);
      setTimeout(() => {
        this.p=this.pregunta
      },900);
    }

    barquito(){
      let opciones=["marcas de auto", "marcas de celulares", "tipos de bebida", "jugadores de gran hermano", "equipos de futbol", "marcas de ropa", "capitales del mundo"]
      this.modo="barquito"
      this.p=""
      this.jugando=true
      setTimeout(() => {
        this.pregunta="Tengo un barquito lleno de " + opciones[Math.floor(Math.random()*opciones.length)]
      }, 5);
      setTimeout(() => {
        this.p=this.pregunta
      }
      ,900);
    }

    yoNunca(){
      let opciones=["volvi con un ex","use esposas o algo similar", "estuve con alguien 5 años mayor que yo"," menti mi edad para levantarme a alguien"," chape despues de haber quebrado"]
      this.modo="yoNunca"
      this.p=""
      this.jugando=true
      setTimeout(() => {
        this.pregunta="Yo nunca " + opciones[Math.floor(Math.random()*opciones.length)]
      }, 5);
      setTimeout(() => {
        this.p=this.pregunta
      }
      ,900);
    }

    verdadOREto(){
      this.vr=' '
      this.pregunta=" "
      this.modo="verdadOREto"
      this.p=""
      this.jugando=true
    }

    clickVerdad(){
      this.next()
      this.modo="verdadOREto"
      let verdades=["crees en la vida extraterreste", "measte alguna vez en una pileta", "te gusta el anime", "menciona una virtud de cada participante", "perdonarias una infidelidad"];
      let verdadp=["fingiste un orgasmo", "cual es tu fantasia sexual", "cual fue tu record de pajas en un dia","como fue tu primera vez", "cual fue el video porno mas bizarro que viste", "del 1 al 10 que tan peludo tenes el culo", "a quien te cogerias del grupo"]
      this.p=""
      setTimeout(() => {
        if(!this.vrFire){
          this.pregunta= verdades[Math.floor(Math.random()*verdades.length)]
        }else{
          this.pregunta= verdadp[Math.floor(Math.random()*verdadp.length)]
        }
      }, 5);
      setTimeout(() => {
        this.p=this.pregunta
      }
      ,900);
    }
    clickReto(){
      this.next()
      this.modo="verdadOREto"
      let reto=["abraza a todos los participantes", "imita a otro jugador y que el resto adivine quien es", "tirate un freestyle", "imita un personaje de los simpsons", "la persona de tu derecha te puede peinar como quiera"];
      let retop=["sentate encima del jugador que esta enfrente", "dale un beso al jugador mas lejano", "apoya la mano en la entrepierna del jugador de la derecha", "chupar un dedo de forma sensual del jugador a al izquierda"]
      this.p=""
      setTimeout(() => {
        if(!this.vrFire){
          this.pregunta= reto[Math.floor(Math.random()*reto.length)]
        }
        else{
          this.pregunta= retop[Math.floor(Math.random()*retop.length)]
        }
      }, 5);
      setTimeout(() => {
        this.p=this.pregunta
      }
      ,900);
    }
}
