import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TarefaService } from "./tarefa.service";
import { Tarefa } from "./tarefa.model";

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss',
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa;
  @Output() deletaTarefa = new EventEmitter();
  @Output() marcarStatus = new EventEmitter();

  constructor(private tarefaService: TarefaService) {}

  deletarTarefa(id: string) {
    this.tarefaService.apagarTarefa(id).subscribe(() => {
      this.marcarStatus.emit();
    });
  }

  atualizarStatus(tarefa: Tarefa) {
    this.tarefaService.atualizarTarefa(tarefa).subscribe(() => {
      this.deletaTarefa.emit();
    });
  }

}
