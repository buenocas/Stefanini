package com.arquivoflix.Stefanini.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "tb_filmes")
public class Filmes {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@Column(name="titulo")
	@NotNull
	@Size(min = 1, max = 100)
	private String titulo;
	
	@Column(name="urlImg")
	@NotNull
	@Size(min = 1, max = 500)
	private String urlImg;
	
	@Column(name="diretor")
	@NotNull
	@Size(min = 1, max = 50)
	private String diretor;
	
	@Column(name="sinopse")
	private String sinopse;
	
	@Column(name="ano")
	private Integer ano;
	
	
	@ManyToOne
	@JoinColumn(name = "id_categoria")
	@NotNull
	@JsonIgnoreProperties("filmes")
	private Categoria categoria;
	
	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getUrlImg() {
		return urlImg;
	}

	public void setUrlImg(String urlImg) {
		this.urlImg = urlImg;
	}

	public String getDiretor() {
		return diretor;
	}

	public void setDiretor(String diretor) {
		this.diretor = diretor;
	}




	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public String getSinopse() {
		return sinopse;
	}

	public void setSinopse(String sinopse) {
		this.sinopse = sinopse;
	}

	public Integer getAno() {
		return ano;
	}

	public void setAno(Integer ano) {
		this.ano = ano;
	}
	
	
	
	
	
	
	
	

}
