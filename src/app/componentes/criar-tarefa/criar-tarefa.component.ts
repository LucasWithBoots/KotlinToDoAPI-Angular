import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TarefaDTO} from "../../interfaces/tarefaDTO.interface";

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.scss'
})
export class CriarTarefaComponent {
  @Output() tarefaCriada = new EventEmitter<void>();

  tarefa: TarefaDTO = {
    idUsuario: 2,
    titulo: "",
    descricao: ""
  }

  constructor(private http: HttpClient) {
  }

  onSubmit() {
    this.http.post("http://localhost:8080/tarefa", this.tarefa)
      .subscribe(response => {
        console.log(response)
        this.resetForm()
        this.tarefaCriada.emit()
      })
  }

  private resetForm() {
    this.tarefa = {
      idUsuario: 2,
      titulo: "",
      descricao: ""
    }
  }
}
