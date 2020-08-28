import { Component, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/service/filmes.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Filmes } from 'src/app/Model/Filmes';
import { Categoria } from 'src/app/Model/Categoria';



@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})

export class FiltrarComponent implements OnInit {

  filmes: Filmes = new Filmes()
  listaFilmes: Filmes[]
  titulo: String

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  listCtg: Categoria[]
  idCtg: number


  filtro: boolean;


  constructor(

    private filmesService: FilmesService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {


    this.filtro = false;

    this.idCtg = 0;

    console.log(this.idCtg);

    window.scroll(0, 0);

    this.idCtg = this.route.snapshot.params['id']

    console.log(this.idCtg);

    this.findAllCategoria();

    this.findFilmesByCategoria(this.idCtg)




    // console.log(this.listaFilmes)
    // console.log(this.listaCategoria)


  }


  findAllFilmes() {
    this.filmesService.getAllFilmes().subscribe((resp: Filmes[]) => {
      this.listaFilmes = resp;
    })

  }

  findFilmesByCategoria(id: number) {

    if (this.idCtg == null) {

      this.findAllFilmes();

    } else {

      this.categoriaService.getById(id).subscribe((resp: Categoria[]) => {
        this.listCtg = resp

        console.log(this.listCtg)

      })
    }

  }


  findByTitulo() {

    if ((this.titulo == null) || (this.titulo === "")) {
      this.findAllFilmes()
    } else {
      this.filtro = true
      this.filmesService.getByTitulo(this.titulo).subscribe((resp: Filmes[]) => {
        this.listaFilmes = resp

        // location.assign("/home")

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
