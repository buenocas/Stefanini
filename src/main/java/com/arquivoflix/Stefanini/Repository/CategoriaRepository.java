package com.arquivoflix.Stefanini.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arquivoflix.Stefanini.Model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria,Integer> {
	
	public List<Categoria> findAllByNomeContainingIgnoreCase(String nome);
	
}
