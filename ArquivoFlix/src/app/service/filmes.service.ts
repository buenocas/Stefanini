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

  getByTitulo(titulo){
    return this.http.get(`http://localhost:8080/filmes/titulo/${titulo}`)
  }

  postFilme(filme: Filmes){
    return this.http.post('http://localhost:8080/filmes', filme)
  }



}
