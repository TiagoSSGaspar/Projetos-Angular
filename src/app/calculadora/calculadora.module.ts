import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent, SqrtComponent } from './components';
import {CalculadoraService, SqrtService} from './services';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import {CalculadoraRoutingComponent} from './calculadora-routing.component';


@NgModule({
  declarations: [
    CalculadoraComponent,
    SqrtComponent,
    CalculadoraRoutingComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ],
  providers: [
    CalculadoraService,
  ]
})
export class CalculadoraModule { }
