import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Produto } from '../../entities/produto';
import { deletaProduto } from '../../environments/deletaProduto';
import { alterarProdutoService } from '../../services/atualizarProduto.service';
import { deletaProdutoService } from '../../services/deletaProduto.service';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrl: './modal-item.component.scss'
})
export class ModalItemComponent {

  @Input() isOpen: boolean = false;
  @Input() closeModal!: () => void; 
  @Output() produtoAlt = new EventEmitter<void>(); 
  @Output() produtoDel = new EventEmitter<void>(); 
  valido: boolean = true;
 


  produto: Produto = {
    id:'',
    nome: '',
    url: '',
    quantidade: '',
    quantidadeDisponivel: ''
  };

  @Input() idI: number | undefined;
  @Input() nomeI: string | undefined;
  @Input() urlI: string | undefined;
  @Input() quantidadeI: number | undefined;
  @Input() quantidadeDisponivelI: number | undefined;

  ngOnInit(): void {
    
    this.produto = {
      id: this.idI?.toString() || '', 
      nome: this.nomeI || '',
      url: this.urlI || '',
      quantidade: this.quantidadeI?.toString() || '', 
      quantidadeDisponivel: this.quantidadeDisponivelI?.toString() || '', 
    };
  }

  constructor(
    private deletaProdutoService: deletaProdutoService,
    private alterarProdutoService: alterarProdutoService
  ) {}
  

  deletaProduto(): void {
    if (!this.idI) {
      alert('Erro: O ID do produto não foi fornecido.');
      return;
    }
  
    const confirmacao = window.confirm('Tem certeza de que deseja deletar este produto?');
    if (!confirmacao) {
      return;
    }
  
    this.deletaProdutoService.deletaProd(this.idI).subscribe(
      () => {
        this.produtoDel.emit();
        alert('Produto deletado com sucesso');
        
      },
      (erro) => {
        console.error('Erro ao deletar o produto:', erro);
        alert('Erro ao deletar o produto.');
      }
    );
  }

  alterarProduto(): void {
    this.valido = true
    if (this.idI === undefined) {
      alert('Erro: O ID do produto não foi fornecido.');
      return;
    }
    if(!this.produto.nome ){
      alert("Nome precida estar preenchido")
      this.valido=false
    }
    if(!this.produto.quantidadeDisponivel){
      alert("Quantidade Total precida estar preenchido")
      this.valido=false
    }
    if(!this.produto.quantidade){
      alert("Quantidade Disponivel precida estar preenchido")
      this.valido=false
    }
    if(!this.produto.url){
      alert("Url precida estar preenchida")
      this.valido=false
    }
    
    if(this.valido){
      this.alterarProdutoService.alterarProd(this.idI,this.produto).subscribe(
        () => {
          this.produtoAlt.emit();
          alert('Produto alterado com sucesso');
          
        },
        (erro) => {
          console.error('Erro ao deletar o produto:', erro);
          alert('Erro ao deletar o produto.');
        }
      );
    }
  }

  fechaModal(): void {
    this.closeModal(); 
  }

  fechaModalDel():void {
    this.deletaProduto();
    this.closeModal();
  }
  fechaModalAlt():void {
    this.alterarProduto();
    this.closeModal();
  }
}
