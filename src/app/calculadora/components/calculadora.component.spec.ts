import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { CalculadoraComponent } from './calculadora.component';
import {CalculadoraService} from '../services';


describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir  que 7 + 2 = 9', () => {
    const btn7 = fixture.debugElement.query(By.css('#btn7'));
    btn7.triggerEventHandler('click', null);
    fixture.detectChanges();

    const btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    const btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    const display = fixture.debugElement.query(By.css('#display'));
    expect(display.nativeElement.value).toEqual('9');
  });

  it('deve garantir  que 7 - 2 = 5', () => {
    const btn7 = fixture.debugElement.query(By.css('#btn7'));
    btn7.triggerEventHandler('click', null);
    fixture.detectChanges();

    const btnSubtracao = fixture.debugElement.query(By.css('#btnSubtracao'));
    btnSubtracao.triggerEventHandler('click', null);
    fixture.detectChanges();

    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    const btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    const display = fixture.debugElement.query(By.css('#display'));
    expect(display.nativeElement.value).toEqual('5');
  });

});
