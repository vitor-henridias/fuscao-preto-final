import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateComponent } from './components/templates/update/update.component';
import { EstoqueComponent } from './components/templates/estoque/estoque.component';
import { EstoqueService } from './components/templates/estoque/estoque.service';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddprodutosComponent } from './components/templates/addprodutos/addprodutos.component';
import { CatalogoComponent } from './components/templates/catalogo/catalogo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    EstoqueComponent,
    AddprodutosComponent,
    CatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [EstoqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
