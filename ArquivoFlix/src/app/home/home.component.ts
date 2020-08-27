import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../service/filmes.service';
import { CategoriaService } from "../service/categoria.service";
import { Filmes } from '../Model/Filmes';
import { Categoria } from '../Model/Categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  filmes: Filmes = new Filmes()
  listaFilmes: Filmes[]

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCtg: number


  constructor(

    private filmesService: FilmesService,
    private categoriaService: CategoriaService

  ) { }

  ngOnInit(): void {

    window.scroll(0, 0);
    this.findAllCategoria();
    this.findAllFilmes();

  }


  findAllFilmes() {
    this.filmesService.getAllFilmes().subscribe((resp: Filmes[]) => {
      this.listaFilmes = resp;
    })

  }

  findAllCategoria() {

    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  findByCategoria() {
    this.categoriaService.getById(this.idCtg).subscribe((resp: Categoria) => {
      this.categoria = resp
    })

  }


}
