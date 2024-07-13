import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TarefaDTO } from "./tarefaDTO";

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
}
