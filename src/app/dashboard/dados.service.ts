import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observableDados => {
      observableDados.next(this.dados);
      observableDados.complete();
    });
  }
}