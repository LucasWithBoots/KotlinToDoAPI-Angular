import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "./usuario.model";

@Injectable({ providedIn: "root" })
export class UsuarioService{
  constructor(private http: HttpClient) {}

  resgatarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("http://localhost:8080/usuario")
  }
}
