import { Component, OnInit } from '@angular/core';
import {CalculadoraService} from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private valor01: string;
  private valor02: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void{
    this.valor01 = '0';
    this.valor02 = null;
    this.resultado = null;
    this.operacao = null;
  }

  addValor(valor: string): void {
    if (this.operacao === null){
      this.valor01 = this.concatenarValor(this.valor01, valor);
    }else {
      this.valor02 = this.concatenarValor(this.valor02, valor);
    }
  }

  concatenarValor(valorAtual: string, valorConcat: string): string {
    if (valorAtual === '0' || valorAtual === null){
      valorAtual = '';
    }

    if (valorConcat === '.' && valorAtual === null){
      return  '0.';
    }

    if (valorConcat === '.' && valorAtual.indexOf('.') > -1){
      return  valorAtual;
    }

    return valorAtual + valorConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null){
      this.operacao = operacao;
      return;
    }

    if (this.valor02 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.valor01),
        parseFloat(this.valor02),
        this.operacao);
      this.operacao = operacao;
      this.valor01 = this.resultado.toString();
      this.valor02 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    /*
    if (this.valor02 === null) {
      return;
    }
     */
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.valor01),
      parseFloat(this.valor02),
      this.operacao);
  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.valor02 !== null) {
      return this.valor02;
    }
    return this.valor01;
  }

}
