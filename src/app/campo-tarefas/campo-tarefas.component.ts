import { Component, OnInit } from "@angular/core";
import { TarefaComponent } from "../shared/tarefa/tarefa.component";
import { TarefaService } from "../shared/tarefa/tarefa.service";
import { Tarefa } from "../shared/tarefa/tarefa.model";

@Component({
  selector: 'app-campo-tarefas',
  standalone: true,
  imports: [TarefaComponent],
  templateUrl: './campo-tarefas.component.html',
  styleUrl: './campo-tarefas.component.scss',
})
export class CampoTarefasComponent implements OnInit {
  constructor(private tarefaService: TarefaService) {}

  tarefas!: Tarefa[];
  tarefasPendentes: number = 0;

  ngOnInit() {
    this.resgatarTarefas()
  }

  contarTarefasRestantes() {
    this.tarefasPendentes = this.tarefas.filter(
      (tarefa) => tarefa.status === 'PENDENTE',
    ).length;
  }

  resgatarTarefas() {
    this.tarefaService.resgatarTarefas().subscribe((res) => {
      this.tarefas = res;
      this.contarTarefasRestantes();
    });
  }

  removerTarefasProntas(){
    this.tarefaService.apagarTarefasCompletas().subscribe((res)=>{
      this.resgatarTarefas()
    })
  }

}
