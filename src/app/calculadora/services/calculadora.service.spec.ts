import {inject, TestBed} from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';


describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('deve garantir que 1 + 4 = 5', inject([CalculadoraService], (service: CalculadoraService) => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  })
  );

  it('deve garantir que 1 - 4 = -3', inject([CalculadoraService], (service: CalculadoraService) => {
      const subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir que 4 / 2 = 2', inject([CalculadoraService], (service: CalculadoraService) => {
      const divisao = service.calcular(4, 2, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2);
    })
  );

  it('deve garantir que 2 + 4 = 8', inject([CalculadoraService], (service: CalculadoraService) => {
      const multiplicacao = service.calcular(2, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(8);
    })
  );

});

