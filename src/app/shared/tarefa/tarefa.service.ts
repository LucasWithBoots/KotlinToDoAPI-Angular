import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class TarefaService{

  public tarefas: any;
  constructor(private http: HttpClient) { }

  resgatarTarefas(){
    return this.http.get<any>('http://localhost:8080/tarefa')
  }

  enviarTarefa(descricao: string){
    this.http.post<any>('http://localhost:8080/tarefa', { title: descricao })
      .subscribe(data => {
      this.postId = data.id;
    })
  }
}
