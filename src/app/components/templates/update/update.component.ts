import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstoqueService } from '../estoque/estoque.service';
import { Estoque } from '../estoque/estoque.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  id: number = 0;
  index: number = 0;
  produto: Estoque | undefined
  qtde: number = 0;

  constructor(
    private actionSheetController: ActionSheetController,
    public estoqueService: EstoqueService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ca();
  }

  onSubmit(from: any): void { }

  ca(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.estoqueService.getProduto(this.id).subscribe((produto) => {
      this.produto = produto
      console.log(this.produto.id)
    });
  }
  // adicionar(): void {
  //   if (this.produto) {
  //     this.estoqueService.editProduto(this.produto.id ,this.produto.cod, this.produto.desc, this.produto.qtdedisponivel, this.produto.minima, this.produto.maxima, this.qtde)
  //     .subscribe((produto) => {
  //       this.produto = produto
  //       console.log(this.produto)
  //     }
  //   }
  // }

  adicionar(): void {
    if (this.produto) {
      this.estoqueService.editProduto(this.produto.id, this.produto.cod, this.produto.desc, this.produto.qtdedisponivel, this.produto.minima, this.produto.maxima, this.qtde)
        .subscribe((produto) => {
          this.produto = produto
        })
    }
  }
}
