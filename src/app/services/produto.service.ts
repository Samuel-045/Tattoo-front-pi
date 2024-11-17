import { Observable } from "rxjs";
import { buscaProdutos } from "../environments/buscaProdutos";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../entities/produto";

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    baseUrl = buscaProdutos.baseUrl;  

    constructor(private http: HttpClient) {}

    findAll(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.baseUrl);  
    }
}
