import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprodutosComponent } from './components/templates/addprodutos/addprodutos.component';
import { CatalogoComponent } from './components/templates/catalogo/catalogo.component';
import { EstoqueComponent } from './components/templates/estoque/estoque.component';
import { UpdateComponent } from './components/templates/update/update.component';

const routes: Routes = [
  {path:"", component: EstoqueComponent},
  {path:"update", component: UpdateComponent},
  {path:"update-produto/:id", component: UpdateComponent},
  {path:"addprodutos", component: AddprodutosComponent},
  {path:"catalogo", component: CatalogoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
