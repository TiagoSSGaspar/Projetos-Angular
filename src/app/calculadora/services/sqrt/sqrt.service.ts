import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqrtService {

  static readonly RAIZQUADRADA: string = 'ʋ';

  constructor() { }

  raizQ(valor: number, operacao: string): number {
    let  resultado: number;

    if (operacao === SqrtService.RAIZQUADRADA) {
     resultado = Math.sqrt(valor);
   }

    return resultado;
  }
}
