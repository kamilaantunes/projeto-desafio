package org.acme.dto;

    // Data transferer object

public class UserDto {
    private String nome;
    private String lastNome;
    private Integer idade;
    private String cidade;
    private String estado;
    private String escolaridade;
    private String telefone;

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getLastNome(){
        return lastNome;
    }

    public void setLastNome(String lastNome){
        this.lastNome = lastNome;
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

    public String getTelefone(){
        return telefone;
    }

    public void setTelefone(String telefone){
        this.telefone = telefone;
    }
}
