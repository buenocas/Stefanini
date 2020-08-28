import { Component, OnInit } from '@angular/core';
import { Filmes } from 'src/app/Model/Filmes'
import { Categoria } from 'src/app/Model/Categoria';
import { FilmesService } from 'src/app/service/filmes.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  filmes: Filmes = new Filmes()
  listaFilmes: Filmes[]

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCtg: number


  constructor(

    private filmesService: FilmesService,
    private categoriaService: CategoriaService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.findAllCategoria();

  }

  verificar() {

    this.categoria.idCategoria = this.idCtg
    this.filmes.categoria = this.categoria
    console.log(this.filmes);


    if ((this.filmes.titulo == null) || (this.filmes.urlImg == null) || (this.filmes.diretor == null) || (this.categoria.idCategoria == null)) {

      alert("Você precisa preencher todos os campos obrigatórios!!")
    } else {

      this.filmesService.postFilme(this.filmes).subscribe((resp: Filmes) => {
        this.filmes = resp
        alert("Filme Adiocionado com sucesso")
        this.router.navigate(['/home'])
      })

    }



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
