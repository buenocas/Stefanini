package com.arquivoflix.Stefanini.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arquivoflix.Stefanini.Model.Filmes;

@Repository
public interface FilmesRepository extends JpaRepository<Filmes, Integer>{

	public List<Filmes> findAllByTituloContainingIgnoreCase(String titulo);
	
}
