package org.acme.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "users")
public class User extends PanacheEntity{
    private String nome;
    private Integer idade;
    private String email;
    private String cidade;
    private String estado;
    private String escolaridade;
    private String observacao;

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public Integer getIdade(){
        return idade;
    }

    public void setIdade(Integer idade){
        this.idade = idade;
    }

    public String getCidade(){
        return cidade;
    }

    public void setCidade(String cidade){
        this.cidade = cidade;
    }

    public String getEstado(){
        return estado;
    }

    public void setEstado(String estado){
        this.estado = estado;
    }

    public String getEscolaridade(){
        return escolaridade;
    }

    public void setEscolaridade(String escolaridade){
        this.escolaridade = escolaridade;
    }

    public String getObservacao(){
        return observacao;
    }

    public void setObservacao(String observacao){
        this.observacao = observacao;
    }
}
