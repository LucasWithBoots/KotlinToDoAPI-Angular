import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TarefaDTO } from "./tarefaDTO";
import { Tarefa } from "./tarefa.model";

@Injectable({providedIn: 'root'})
export class TarefaService{

  public tarefas: any;
  constructor(private http: HttpClient) { }

  resgatarTarefas(){
    return this.http.get<any>('http://localhost:3000/tarefas')
  }

  enviarTarefa(tarefa: TarefaDTO){
    this.http.post<any>('http://localhost:3000/tarefas', tarefa)
      .subscribe(response => {
        console.log(response)

    })
  }

  apagarTarefa(id: string){
    this.http.delete(`http://localhost:3000/tarefas/${id}`).subscribe(() => {
      console.log(`Tarefa com id ${id} deletada com sucesso`);
    })
  }

  atualizarTarefa(tarefa: Tarefa) {
    let novoStatus

    if(tarefa.status == "PENDENTE"){
      novoStatus = "CONCLUIDA"
    } else {
      novoStatus = "PENDENTE"
    }

    let tarefaAtualizada: Tarefa = {
      id: tarefa.id,
      titulo: tarefa.titulo,
      dataDeCriacao: tarefa.dataDeCriacao,
      status: novoStatus
    }

      this.http.put(`http://localhost:3000/tarefas/${tarefa.id}`, tarefaAtualizada).subscribe(() => {
        console.log(`Tarefa com id ${tarefa.id} atualizada`);
      });
  }
}
