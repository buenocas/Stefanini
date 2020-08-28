import { Component, OnInit } from '@angular/core';
import { Filmes } from '../Model/Filmes';
import { Categoria } from '../Model/Categoria';
import { FilmesService } from '../service/filmes.service';
import { CategoriaService } from '../service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  filmes: Filmes = new Filmes()
  listaFilmes: Filmes[]
  idFilmes: number;

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCtg: number

  constructor(

    private filmesService: FilmesService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.idFilmes = this.route.snapshot.params["id"]

    this.findById(this.idFilmes)



    this.findAllCategoria();


  }

  findById(id: number) {

    return this.filmesService.getByid(id).subscribe((resp: Filmes) => {
      this.filmes = resp
    })

  }

  findByCategoria() {
    this.categoriaService.getById(this.idCtg).subscribe((resp: Categoria) => {
      this.categoria = resp
    })

  }

  findAllCategoria() {

    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

}
