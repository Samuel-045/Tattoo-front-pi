import { Component, Input,OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-estoque',
  templateUrl: './item-estoque.component.html',
  styleUrls: ['./item-estoque.component.scss']
})
export class ItemEstoqueComponent implements OnInit{
  openModal: boolean = false;
  @Output() produtoAlterado = new EventEmitter<void>(); 
  @Output() produtoDeletado = new EventEmitter<void>(); 

  ngOnInit(): void {}

  AtivaModal() {
    this.openModal = true;
  }

  FechaModal = () => {
    this.openModal = false;
  }

  @Input() id: number | undefined;
  @Input() nome: string | undefined;
  @Input() url: string | undefined;
  @Input() quantidade: number | undefined;
  @Input() quantidadeDisponivel: number | undefined;

  constructor() {}

  emitirEventos(): void {
    alert("eventos emitidos")
    this.produtoAlterado.emit();
    this.produtoDeletado.emit();
  }

}