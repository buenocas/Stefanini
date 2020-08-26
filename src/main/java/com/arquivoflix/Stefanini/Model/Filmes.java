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


@Entity
@Table(name = "filmes")
public class Filmes {
	
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
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
	
	@ManyToOne
	@JoinColumn(name = "idCategoria")
	private Categoria categoria;
	
	@Column(name="sinopse")
	private String sinopse;
	
	@Column(name="ano")
	@Size(min = 4, max = 4)
	private int ano;
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
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
	public int getAno() {
		return ano;
	}
	public void setAno(int ano) {
		this.ano = ano;
	}
	
	
	

}
