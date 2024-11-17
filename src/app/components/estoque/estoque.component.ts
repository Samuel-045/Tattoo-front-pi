import { Component, OnInit} from '@angular/core';
import { Produto } from '../../entities/produto';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.scss'
})
export class EstoqueComponent implements OnInit {

  list: Produto[] = []; 
  filteredItems: Produto[] = []; 
  searchText: string = '';
  openModal: boolean = false;

  constructor(private service: ProdutoService,private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  AtivaModal() {
    this.openModal = true;
  }

  FechaModal = () => {
    this.openModal = false;
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
      this.filteredItems = resposta; 
    });
  }

  filterItems(): void {
    if (this.searchText) {
      this.filteredItems = this.list.filter(item => 
        item.nome.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredItems = this.list; 
    }
  }

  navegarHome(){
    this.router.navigate(['/home']);
  }
  onProdutoCadastrado(): void {
    this.findAll();
  }
  atualizaProd(): void {
    alert("envento deletar")
    this.findAll(); 
  }
}
