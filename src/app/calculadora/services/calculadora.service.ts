import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly RAIZQUADRADA: string = 'ʋ';

  constructor() { }


  /**
   * Método que calcula uma operação matemática dado dois valores
   * Suporta as operações soma, subtração, divisão e multiplicação
   *
   * @param valor01 number
   * @param valor02 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
   */

  calcular(valor01: number, valor02: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.RAIZQUADRADA:
        resultado = Math.sqrt(valor01);
        break;
      case CalculadoraService.SOMA:
        resultado = valor01 + valor02;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = valor01 - valor02;
        break;
      case CalculadoraService.DIVISAO:
        resultado = valor01 / valor02;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = valor01 * valor02;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
