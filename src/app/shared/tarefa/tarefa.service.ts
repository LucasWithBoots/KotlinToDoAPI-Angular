import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TarefaDTO } from "./tarefaDTO";
import { Tarefa, TarefaStatusPUT } from "./tarefa.model";
import { forkJoin, Observable, switchMap } from "rxjs";

@Injectable({ providedIn: "root" })
export class TarefaService {
  public tarefas: any;
  constructor(private http: HttpClient) {}

  resgatarTarefas(opcao?: string): Observable<Tarefa[]> {
    if (opcao == "pendentes") {
      return this.http.get<Tarefa[]>(
        "http://localhost:3000/tarefas?status=PENDENTE",
      );
    } else if (opcao == "concluidas") {
      return this.http.get<Tarefa[]>(
        "http://localhost:3000/tarefas?status=CONCLUIDA",
      );
    } else { // concertar o IF e else IF depois
      return this.http.get<Tarefa[]>("http://localhost:8080/tarefa");
    }
  }

  enviarTarefa(tarefa: TarefaDTO): Observable<Tarefa> {
    return this.http.post<Tarefa>("http://localhost:8080/tarefa", tarefa);
  }

  apagarTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/tarefas/${id}`);
  }

  atualizarTarefa(tarefa: Tarefa): Observable<Tarefa> {

    let tarefaAtualizada: TarefaStatusPUT = {
      id: tarefa.id,
      status: tarefa.status === "PENDENTE" ? "CONCLUIDA" : "PENDENTE"
    };

    return this.http.put<Tarefa>(
      `http://localhost:8080/tarefas/status`,
      tarefaAtualizada,
    );
  }

  apagarTarefasCompletas(): Observable<void[]> {
    return this.http
      .get<Tarefa[]>("http://localhost:3000/tarefas?status=CONCLUIDA")
      .pipe(
        switchMap((tarefasConcluidas) => {
          const deleteObservables = tarefasConcluidas.map((tarefa) =>
            this.apagarTarefa(tarefa.id),
          );
          return forkJoin(deleteObservables);
        }),
      );
  }
}
