import { Component, OnInit } from '@angular/core';

import {JogoDaVelhaService} from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  iniciarJogo($event: any): void {
    $event.preventDefault();
    this.jogoDaVelhaService.iniciarJogo();
  }

  jogar(posicaoX: number, posicaoY: number): void {
    this.jogoDaVelhaService.jogar(posicaoX, posicaoY);
  }

  exibirX(posicaoX: number, posicaoY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posicaoX, posicaoY);
  }

  exibirO(posicaoX: number, posicaoY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posicaoX, posicaoY);
  }

  exibirVitoria(posicaoX, posicaoY): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posicaoX, posicaoY);
  }

  get jogadorAtual(): number {
    return this.jogoDaVelhaService.jogador;
  }

  jogarNovamente($event: any): void {
    $event.preventDefault();
    this.jogoDaVelhaService.novoJogo();
  }

}
