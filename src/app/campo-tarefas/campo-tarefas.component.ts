import { Component } from '@angular/core';
import {TarefaComponent} from "../shared/tarefa/tarefa.component";

@Component({
  selector: 'app-campo-tarefas',
  standalone: true,
  imports: [
    TarefaComponent
  ],
  templateUrl: './campo-tarefas.component.html',
  styleUrl: './campo-tarefas.component.scss'
})
export class CampoTarefasComponent {

}
