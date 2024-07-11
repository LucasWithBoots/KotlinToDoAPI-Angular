import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {CriarTarefaComponent} from "./criar-tarefa/criar-tarefa.component";
import {CampoTarefasComponent} from "./campo-tarefas/campo-tarefas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CriarTarefaComponent, CampoTarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
