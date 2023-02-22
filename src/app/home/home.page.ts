import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  mediarenfa = 0;
  numpessoas = 0;
  resproprias = 0;
  resalugadas = 0;
  residencias = 0;
  mediafinal = 0;

  coldados(formu: { value: { renfa: any; numpe: any; tpres: any; }; }) {
    const renfa = formu.value.renfa;
    const numpe = formu.value.numpe;
    const tpres = formu.value.tpres;

    this.mediarenfa += parseFloat(renfa);
    this.numpessoas += parseFloat(numpe);

    if(tpres == "P"){
      this.resproprias++;
      this.residencias++;
    } else if(tpres == "A"){
      this.resalugadas++;
      this.residencias++;
    }

    this.mediafinal = this.mediarenfa/this.residencias;
    
  }

}