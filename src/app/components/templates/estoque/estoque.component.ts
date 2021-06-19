import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoque.model';
import { EstoqueService } from './estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  produtos: Estoque[] = []

  constructor(private estoqueService: EstoqueService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.estoqueService.getProdutos().subscribe(produtos => {
      this.produtos = produtos
      for (let produto of this.produtos) {
        if (produto.id > this.estoqueService.maxid) {
          this.estoqueService.maxid = produto.id
        }
      }
    })
  }
}
