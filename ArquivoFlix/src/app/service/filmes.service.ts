import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Filmes } from '../Model/Filmes';

@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor(private http: HttpClient) { }


  getAllFilmes() {

    return this.http.get('http://localhost:8080/filmes');

  }

  getByid(id: number) {
    return this.http.get(`http://localhost:8080/filmes/${id}`)
  }

  getByTitulo(titulo: String) {
    return this.http.get(`http://localhost:8080/filmes/titulo/${titulo}`)
  }

  postFilme(filme: Filmes) {
    return this.http.post('http://localhost:8080/filmes', filme)
  }

  putFilme(filme: Filmes) {

    return this.http.put('http://localhost:8080/filmes', filme)

  }

  deletarFilme(id: number) {

    return this.http.delete(`http://localhost:8080/filmes/${id}`)

  }


}

