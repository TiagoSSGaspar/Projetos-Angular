import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ListarComponent} from './listar';
import {CadastrarComponent} from './cadastrar';
import {EditarComponent} from './editar';
import {TarefasRoutingComponent} from './tarefas-routing.component';

export  const TarefasRoutes: Routes = [
  {
    path: 'tarefas',
    component: TarefasRoutingComponent,
    children: [
      {
        path: '',
        component: ListarComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarComponent
      },
      {
        path: 'editar/:id',
        component: EditarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(TarefasRoutes)],
  exports: [RouterModule]
})

export class TarefasRoutingModule {}
