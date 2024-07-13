import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../shared/tarefa/tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.scss',
})
export class CriarTarefaComponent {
  enteredTask: string = 'Escreva aqui...';
  @Output() postCompleto = new EventEmitter();

  constructor(private tarefaService: TarefaService) {}

  onSubmit() {
    this.tarefaService.enviarTarefa({
      titulo: this.enteredTask,
      dataDeCriacao: new Date().toDateString(),
      status: 'PENDENTE',
    });

    this.postCompleto.emit();

    this.enteredTask = '';
  }
}
