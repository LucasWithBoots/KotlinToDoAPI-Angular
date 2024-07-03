import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Tarefa} from "../../../tarefa.interface";
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
        this.tarefas = res;
      },
      (err) => {
        console.error('Erro ao buscar tarefas', err);
      }
    );
  }


}
