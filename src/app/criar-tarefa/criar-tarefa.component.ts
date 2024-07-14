import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TarefaService } from "../shared/tarefa/tarefa.service";
import { UsuarioService } from "../shared/usuario/usuario.service";
import { Usuario } from "../shared/usuario/usuario.model";

@Component({
  selector: "app-criar-tarefa",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./criar-tarefa.component.html",
  styleUrl: "./criar-tarefa.component.scss",
})
export class CriarTarefaComponent implements OnInit {
  enteredTask: string = "Escreva aqui...";
  @Output() postCompleto = new EventEmitter();

  usuarios: Usuario[] = [];
  usuarioSelecionado!: Usuario;
  nomeUsuarioNovo: string = "Adicionar Usuário";

  constructor(
    private tarefaService: TarefaService,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit() {
    this.resgatarUsuarios();
  }

  onSubmit() {
    this.tarefaService
      .enviarTarefa({
        titulo: this.enteredTask,
        idUsuario: this.usuarioSelecionado.id,
      })
      .subscribe(() => {
        this.postCompleto.emit();
        this.enteredTask = "";
      });
  }

  resgatarUsuarios() {
    this.usuarioService.resgatarUsuarios().subscribe((res) => {
      this.usuarios = res;
    });
  }

  onSubmitUser() {
    this.usuarioService
      .criarUsuario({
        nome: this.nomeUsuarioNovo,
        email: `${this.nomeUsuarioNovo}@email.com`,
      })
      .subscribe(() => {
        this.resgatarUsuarios();
      });
  }
}
