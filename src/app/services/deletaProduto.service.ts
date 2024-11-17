import { Observable } from "rxjs";
import { deletaProduto } from "../environments/deletaProduto";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../entities/produto";

@Injectable({
    providedIn: 'root'
})
export class deletaProdutoService {
    baseUrl = deletaProduto.baseUrl;
  
    constructor(private http: HttpClient) {}
  
    deletaProd(id: number): Observable<void> { 
      return this.http.delete<void>(`${this.baseUrl}${id}`);
    }
  }
