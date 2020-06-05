import {Component, OnInit, ViewChild} from '@angular/core';
import {Tarefa, TarefaService} from '../shared';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @ViewChild('formTarefa', {static: true}) formTarefa: NgForm;
  tarefa: Tarefa
  constructor(private tarefaService: TarefaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorIdid(id);
  }

  atualizar(): void{
    if (this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['./tarefas']);
    }
  }

}
