import { Component, OnInit } from '@angular/core';
import { Filmes } from 'src/app/Model/Filmes';
import { Categoria } from 'src/app/Model/Categoria';
import { FilmesService } from 'src/app/service/filmes.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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

  verificar() {

    this.categoria.idCategoria = this.idCtg
    this.filmes.categoria = this.categoria
    console.log(this.filmes);

    if ((this.filmes.titulo == null) || (this.filmes.urlImg == null) || (this.filmes.diretor == null) || (this.categoria.idCategoria == null)) {

      alert("Você precisa preencher todos os campos obrigatórios!!")
    } else {

      this.filmesService.putFilme(this.filmes).subscribe((resp: Filmes) => {
        this.filmes = resp
        alert("Filme Alterado com sucesso")
        this.router.navigate(['/home'])

      })

    }

  }
}