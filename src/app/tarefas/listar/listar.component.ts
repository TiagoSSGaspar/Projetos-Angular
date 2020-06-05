import { Component, OnInit } from '@angular/core';
import {Tarefa, TarefaService} from '../shared';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tarefas: Tarefa[];
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if (confirm('Deseja realmente remover a tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void{
    if (confirm('Você realmente concluiu a tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.status(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }


}
