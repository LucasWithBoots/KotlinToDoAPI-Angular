import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.scss',
})
export class CriarTarefaComponent {
  enteredTask: string = 'Escreva aqui...';

  onSubmit() {

  }
}
