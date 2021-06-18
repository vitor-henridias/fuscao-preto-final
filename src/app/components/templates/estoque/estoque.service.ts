import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estoque } from './estoque.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  baseUrl = "http://localhost:3000/produtos"

  constructor(private http: HttpClient) {

  }

  getProdutos(): Observable<Estoque[]> {
    return this.http.get<Estoque[]>(this.baseUrl)
  }

  getProduto(id: number): Observable<Estoque> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Estoque>(url)
  }

  addProduto(id: number, cod: number, desc: string, qtdedisponivel: number, maxima: number, minima: number): Observable<Estoque> {
    let produto = new Estoque(id, cod, desc, qtdedisponivel, maxima, minima)
    return this.http.post<Estoque>(this.baseUrl, produto)
  }

  editProduto(id:number, cod: number, desc: string, qtdedisponivel: number, maxima: number, minima: number, qtde: number): Observable<Estoque> {
    let produto = new Estoque(id, cod, desc, qtdedisponivel + qtde, maxima, minima)

    const url = `${this.baseUrl}/${id}`
    return this.http.put<Estoque>(this.baseUrl, produto)
  }

}
