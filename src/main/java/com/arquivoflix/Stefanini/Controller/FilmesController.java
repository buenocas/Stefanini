package com.arquivoflix.Stefanini.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arquivoflix.Stefanini.Model.Filmes;
import com.arquivoflix.Stefanini.Repository.FilmesRepository;

@RestController
@RequestMapping("/home")
@CrossOrigin("x")
public class FilmesController {
	
	@Autowired
	private FilmesRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Filmes>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Filmes> GetById(@PathVariable long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("titulo/{titulo}")
	public ResponseEntity<List<Filmes>> GetByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
	}
	
	@PostMapping
	public ResponseEntity<Filmes> Post(@RequestBody Filmes filmes){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(filmes));
	}
	
	@PutMapping
	public ResponseEntity<Filmes> Put(@RequestBody Filmes filmes){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(filmes));
	}

}
