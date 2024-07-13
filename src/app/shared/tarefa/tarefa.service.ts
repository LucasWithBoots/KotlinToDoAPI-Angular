import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TarefaDTO } from "./tarefaDTO";
import { Tarefa } from "./tarefa.model";
import { forkJoin, Observable, switchMap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TarefaService {
  public tarefas: any;
  constructor(private http: HttpClient) {}

  resgatarTarefas(opcao?: string):Observable<Tarefa[]> {
    if(opcao == "pendentes"){
      return this.http.get<Tarefa[]>('http://localhost:3000/tarefas?status=PENDENTE');
    } else if (opcao=="concluidas"){
      return this.http.get<Tarefa[]>('http://localhost:3000/tarefas?status=CONCLUIDA');
    } else {
      return this.http.get<Tarefa[]>('http://localhost:3000/tarefas');
    }


  }

  enviarTarefa(tarefa: TarefaDTO): Observable<Tarefa> {
    return this.http
      .post<Tarefa>('http://localhost:3000/tarefas', tarefa);
  }

  apagarTarefa(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/tarefas/${id}`)
  }

  atualizarTarefa(tarefa: Tarefa):Observable<Tarefa> {
    let novoStatus = tarefa.status === "PENDENTE" ? "CONCLUIDA" : "PENDENTE"

    let tarefaAtualizada: Tarefa = {
      id: tarefa.id,
      titulo: tarefa.titulo,
      dataDeCriacao: tarefa.dataDeCriacao,
      status: novoStatus,
    };

    return this.http
      .put<Tarefa>(`http://localhost:3000/tarefas/${tarefa.id}`, tarefaAtualizada)
  }

  apagarTarefasCompletas(): Observable<void[]> {
    return this.http.get<Tarefa[]>('http://localhost:3000/tarefas?status=CONCLUIDA').pipe(
      switchMap(tarefasConcluidas => {
        const deleteObservables = tarefasConcluidas.map(tarefa => this.apagarTarefa(tarefa.id));
        return forkJoin(deleteObservables);
      })
    );
  }
}
