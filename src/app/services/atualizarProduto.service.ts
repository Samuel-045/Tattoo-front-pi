import { Observable } from "rxjs";
import { alterarProduto } from "../environments/alterarProduto";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../entities/produto";

@Injectable({
    providedIn: 'root'
})
export class alterarProdutoService {
    baseUrl = alterarProduto.baseUrl;  

    constructor(private http: HttpClient) {}

    alterarProd(id: number,produto: Produto): Observable<Produto>{
        return this.http.put<Produto>(`${this.baseUrl}${id}`, produto);
    }
}
