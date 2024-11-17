import { Observable } from "rxjs";
import { cadastraProduto } from "../environments/cadastraProduto";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../entities/produto";

@Injectable({
    providedIn: 'root'
})
export class cadastraProdutoService {
    baseUrl = cadastraProduto.baseUrl;  

    constructor(private http: HttpClient) {}

    findAll(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseUrl);  
    }

    cadastraProd(produto: Produto): Observable<Produto>{
        return this.http.post<Produto>(`${this.baseUrl}`, produto);
    }
}
