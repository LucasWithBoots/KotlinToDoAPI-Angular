import { Usuario } from "../usuario/usuario.model";

export type StatusTarefa = "PENDENTE" | "CONCLUIDA";

export interface Tarefa {
  id: number;
  titulo: string;
  dataDeCriacao: string;
  usuario: Usuario;
  status: StatusTarefa;
}

export interface TarefaStatusPUT {
  id: number;
  status: StatusTarefa;
}

export interface TarefaDTO {
  idUsuario: number;
  titulo: string;
}
