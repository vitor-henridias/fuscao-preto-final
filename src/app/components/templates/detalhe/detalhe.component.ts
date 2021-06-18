import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estoque } from '../estoque/estoque.model';
import { EstoqueService } from '../estoque/estoque.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  index: number = 0;
  quantidade: number = 0;

  produtos: Estoque[] = []

  constructor(private estoqueService: EstoqueService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.estoqueService.getProdutos().subscribe(produtos => {
      this.produtos = produtos
    })
  }

}
