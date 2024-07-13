import { Component, OnInit } from "@angular/core";
import { TarefaComponent } from "../shared/tarefa/tarefa.component";
import { TarefaService } from "../shared/tarefa/tarefa.service";

@Component({
  selector: 'app-campo-tarefas',
  standalone: true,
  imports: [TarefaComponent],
  templateUrl: './campo-tarefas.component.html',
  styleUrl: './campo-tarefas.component.scss',
})
export class CampoTarefasComponent implements OnInit{

  constructor(private tarefaService: TarefaService) {}

  tarefas: any

  ngOnInit(){
    this.tarefaService.resgatarTarefas().subscribe(
      res => {
        this.tarefas = res;
      }
    );
  }

}
