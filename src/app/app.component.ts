import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TarefaEstadoInicialComponent} from "./componentes/tarefa/tarefa-estado-inicial/tarefa-estado-inicial.component";
import {
  TarefaEstadoFinalizadoComponent
} from "./componentes/tarefa/tarefa-estado-finalizado/tarefa-estado-finalizado.component";
import {
  ContainersTarefaEstadoInicialComponent
} from "./componentes/containers/containers-tarefa-estado-inicial/containers-tarefa-estado-inicial.component";
import {ContainersMenuComponent} from "./componentes/containers/containers-menu/containers-menu.component";
import {BuscaComponent} from "./componentes/busca/busca.component";
import {CriarTarefaComponent} from "./componentes/criar-tarefa/criar-tarefa.component";
import {SaudacaoTopoComponent} from "./componentes/saudacao-topo/saudacao-topo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TarefaEstadoInicialComponent, TarefaEstadoFinalizadoComponent, ContainersTarefaEstadoInicialComponent, ContainersMenuComponent, BuscaComponent, CriarTarefaComponent, SaudacaoTopoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KotlinToDoAPI-Angular';

  @ViewChild('tarefaInicial') tarefaInicial: TarefaEstadoInicialComponent | undefined;

  onTarefaCriada() {
    // @ts-ignore
    this.tarefaInicial.fetchDetails();
  }
}
