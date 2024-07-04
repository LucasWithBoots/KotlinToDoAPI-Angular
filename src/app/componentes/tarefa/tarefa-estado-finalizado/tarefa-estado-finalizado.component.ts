import {Component, OnInit} from '@angular/core';
import {Tarefa} from "../../../interfaces/tarefa.interface";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tarefa-estado-finalizado',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './tarefa-estado-finalizado.component.html',
  styleUrl: './tarefa-estado-finalizado.component.scss'
})
export class TarefaEstadoFinalizadoComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails() {
    this.http.get<Tarefa[]>("http://localhost:8080/tarefa").subscribe(
      (res: Tarefa[]) => {
        this.tarefas = res.filter(tarefa => tarefa.status === "CONCLUIDA")
      },
      (err) => {
        console.error('Erro ao buscar tarefas', err);
      }
    );
  }

  public deletarTarefa(id: number | undefined) {
    this.http.delete(`http://localhost:8080/tarefa/${id}`).subscribe(() => {
      console.log(`Tarefa com id ${id} deletada com sucesso`);
    })
  }

  public voltarTarefa(id: number | undefined) {
    const body = {
      id: id,
      status: "PENDENTE"
    }

    this.http.put("http://localhost:8080/tarefa/status", body).subscribe(() => {
      console.log(`Tarefa com id ${id} marcada como concluída`);
    })
  }
}
