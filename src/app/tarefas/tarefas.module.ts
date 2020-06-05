import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {TarefaService, TarefaConcluidaDirective} from './shared';
import { ListarComponent } from './listar';
import { CadastrarComponent } from './cadastrar';
import { EditarComponent } from './editar';
import {TarefasRoutingModule} from './tarefas-routing.module';
import {TarefasRoutingComponent} from './tarefas-routing.component';

@NgModule({
  declarations: [ListarComponent,
    CadastrarComponent,
    EditarComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponent
  ],
  providers: [
    TarefaService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TarefasRoutingModule
  ]
})
export class TarefasModule { }
