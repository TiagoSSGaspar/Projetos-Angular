import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  private readonly TAMANHO_TABULEIRO: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;


  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;
  constructor() { }

  inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro =  false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializaTableiro();
  }

  inicializaTableiro() {
    this.tabuleiro = [this.TAMANHO_TABULEIRO];
    for (let i = 0; i < this.TAMANHO_TABULEIRO; i++){
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  get showInicio(): boolean {
    return  this._showInicio;
  }

  get showTabuleiro(): boolean {
    return  this._showTabuleiro;
  }

  get showFinal(): boolean {
    return  this._showFinal;
  }

  get jogador(): number {
    return this._jogador;
  }

  iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  jogar(posicaoX: number, posicaoY: number): void {
    if (this.tabuleiro[posicaoX][posicaoY] !== this.VAZIO || this.vitoria) {
      return;
    }

    this.tabuleiro[posicaoX][posicaoY] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posicaoX, posicaoY, this.tabuleiro, this._jogador);
    this._jogador = (this._jogador === this.X) ? this.O : this.X;

    if (!this.vitoria && this.numMovimentos < 9) {
      this.cpuJogar();
    }

    if (this.vitoria !== false) {
      this._showFinal = true;
    }

    if (!this.vitoria && this.numMovimentos === 9){
      this._jogador = 0;
      this._showFinal = true;
    }
  }

  fimJogo(linha: number, coluna: number, tabuleiro: any, jogador: number) {
    let fim: any = false;
    // valida a linha
    if (tabuleiro[linha][0] === jogador && tabuleiro[linha][1] === jogador && tabuleiro[linha][2] === jogador) {
      fim = [[linha, 0], [linha, 1], [linha, 2]];
    }
    // valida a coluna
    if (tabuleiro[0][coluna] === jogador && tabuleiro[1][coluna] === jogador && tabuleiro[2][coluna] === jogador) {
      fim = [[0, coluna], [1, coluna], [2, coluna]];
    }
    // valida as diagonais
    if (tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador) {
      fim = [[0, 0], [1, 1], [2, 2]];
    }

    if (tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador) {
      fim = [[0, 2], [1, 1], [2, 0]];
    }

    return fim;

  }

  cpuJogar(): void {
    let jogada: number[] = this.obterJogada(this.O);

    if (jogada.length <= 0) {
      jogada = this.obterJogada(this.X);
    }

    if (jogada.length <= 0) {
      const jogadas: any = [];

      for (let i = 0; i < this.TAMANHO_TABULEIRO; i++){
        for (let j = 0; j < this.TAMANHO_TABULEIRO; j++) {
          if (this.tabuleiro[i][j] === this.VAZIO) {
            jogadas.push([i, j]);
          }
        }
      }

      const k = Math.floor((Math.random() * (jogadas.length - 1 )));
      jogada = [jogadas[k][0], jogadas[k][1]];

    }
    this.tabuleiro[jogada[0]][jogada[1]] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(jogada[0], jogada[1], this.tabuleiro, this._jogador);
    this._jogador = (this.jogador ===  this.X) ? this.O : this.X;
  }

  obterJogada(jogador: number): number[] {
    const tabuleiro = this.tabuleiro;

    for (let linha = 0; linha < this.TAMANHO_TABULEIRO; linha++){
      for (let coluna = 0; coluna < this.TAMANHO_TABULEIRO; coluna++) {
        if (tabuleiro[linha][coluna] !== this.VAZIO){
          continue;
        }

        tabuleiro[linha][coluna] = jogador;
        if (this.fimJogo(linha, coluna, tabuleiro, jogador)) {
          return [linha, coluna];
        }

        tabuleiro[linha][coluna] = this.VAZIO;
      }
    }

    return [];
  }

  exibirX(posicaoX: number, posicaoY: number): boolean {
    return this.tabuleiro[posicaoX][posicaoY] === this.X;
  }

  exibirO(posicaoX: number, posicaoY: number): boolean {
    return this.tabuleiro[posicaoX][posicaoY] === this.O;
  }

  exibirVitoria(posicaoX: number, posicaoY: number): boolean {
    let exibirVitoria = false;

    if (!this.vitoria) {
      return exibirVitoria;
    }

    for (const posicao of this.vitoria) {
      if (posicao[0] === posicaoX && posicao[1] === posicaoY) {
        exibirVitoria = true;
        break;
      }
    }

    return exibirVitoria;

  }

  novoJogo(): void {
    this.inicializar();
    this._showFinal = false;
    this._showInicio = false;
    this._showTabuleiro = true;
  }

}
