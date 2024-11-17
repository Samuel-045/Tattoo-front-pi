import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../entities/produto';
import { cadastraProdutoService } from '../../services/cadastraProduto.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() closeModal!: () => void;
  @Output() produtoCadastrado = new EventEmitter<void>(); 
  valido: boolean = true;

  produto: Produto = {
    id: '',
    nome: '',
    url: '',
    quantidade: '',
    quantidadeDisponivel: ''
  };

  constructor(private service: cadastraProdutoService) {}

  cadastraProduto(): void {
    this.valido = true
    if(!this.produto.nome ){
      alert("Nome nao pode estar vazio, por favor informe!")
      this.valido=false
    }
    if(!this.produto.url){
      alert("Url nao pode estar vazio, por favor informe!")
      this.valido=false
    }
    if(!this.produto.quantidade){
      alert("Quantidade Disponivel nao pode estar vazio, por favor informe!")
      this.valido=false
    }
    if(!this.produto.quantidadeDisponivel){
      alert("Quantidade Total nao pode estar vazio, por favor informe!")
      this.valido=false
    }
    
    if(this.valido){
      this.service.cadastraProd(this.produto).subscribe(() => {
        alert("Produto cadastrado com sucesso");
        this.produtoCadastrado.emit(); // Emite o evento para o componente pai
        this.closeModal();
      });
    }
    
  }

  fechaModalCad(): void {
    this.cadastraProduto();
  }
}
