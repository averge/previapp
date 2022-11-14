import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.scss']
})
export class ParticipanteComponent implements OnInit {
  nuevaPersona = new FormGroup(
    {nombre : new FormControl('', [Validators.required]),
    })
  constructor(public dialogRef: MatDialogRef<ParticipanteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  addPersona(){
    this.dialogRef.close(this.nuevaPersona.value);
  }
  cancelar(){
    this.dialogRef.close();
  }
}
