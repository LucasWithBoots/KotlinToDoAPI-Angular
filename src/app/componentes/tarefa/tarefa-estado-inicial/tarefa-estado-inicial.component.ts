import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Tarefa} from "../../../interfaces/tarefa.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tarefa-estado-inicial',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgForOf],
  templateUrl: './tarefa-estado-inicial.component.html',
  styleUrl: './tarefa-estado-inicial.component.scss'
})
export class TarefaEstadoInicialComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchDetails();
  }

  public fetchDetails() {
    this.http.get<Tarefa[]>("http://localhost:8080/tarefa").subscribe(
      (res: Tarefa[]) => {
        this.tarefas = res.filter(tarefa => tarefa.status === "PENDENTE")
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


  public marcarConcluida(id: number | undefined) {
    const body = {
      id: id,
      status: "CONCLUIDA"
    }

    this.http.put("http://localhost:8080/tarefa/status", body).subscribe(() => {
      console.log(`Tarefa com id ${id} marcada como concluída`);
    })
  }
}
