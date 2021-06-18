import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../estoque/estoque.service';

@Component({
  selector: 'app-addprodutos',
  templateUrl: './addprodutos.component.html',
  styleUrls: ['./addprodutos.component.css']
})
export class AddprodutosComponent implements OnInit {
  router: any;

  constructor(private listaestoque : EstoqueService) { 

  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    let id: number
    let cod: number
    let desc: string = ''
    let qtdedisponivel: number
    let maxima: number
    let minima: number
    id = form.value.id
    cod = form.value.cod
    desc = form.value.desc
    qtdedisponivel = form.value.qtdedisponivel
    maxima = form.value.maxima
    minima = form.value.minima

    this.listaestoque.addProduto(id, cod, desc, qtdedisponivel, maxima, minima).subscribe(() =>{
      this.router.navigate(['/produtos']);
    })

    alert("Item Cadastrado com sucesso!")
  }

}
