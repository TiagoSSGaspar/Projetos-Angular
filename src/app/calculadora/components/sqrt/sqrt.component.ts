import { Component, OnInit } from '@angular/core';
import {SqrtService} from '../../services/sqrt';

@Component({
  selector: 'app-sqrt',
  templateUrl: './sqrt.component.html',
  styleUrls: ['./sqrt.component.css']
})
export class SqrtComponent implements OnInit {

  private valor01: string;
  private resultado: number;
  private operacao: string;

  constructor(private sqrtService: SqrtService) { }

  ngOnInit(): void {
  }

  calcularSqrt(): void {
    this.resultado = this.sqrtService.raizQ(parseFloat(this.valor01), this.operacao);
  }

  definirOpercao(operacao: string): void {
    if (operacao === null) {
      this.operacao = operacao;
      return;
    }

    if (this.valor01 !== null) {
      this.resultado = this.sqrtService.raizQ(parseFloat(this.valor01), this.operacao);
      this.operacao = operacao;
      this.valor01 = this.resultado.toString();
      this.resultado = null;
    }
  }

  get display(): string {
    if (this.valor01 !== null) {
      return this.resultado.toString();
    }
    if (this.valor01 !== null) {
      return this.valor01;
    }

    return this.valor01;
  }

}
