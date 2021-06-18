import { Component, OnInit } from '@angular/core';
import { Estoque } from '../estoque/estoque.model';
import { EstoqueService } from '../estoque/estoque.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  produtos: Estoque[] = []

  constructor(private listeService: EstoqueService) {
    // this.produtos = listService.getEstoque()
  }

  ionViewWillEnter() {
    this.listeService.getProdutos().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  ngOnInit(): void {
  }
}

