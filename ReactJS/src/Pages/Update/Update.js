import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Update(){
  const {id} = useParams();

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [observacao, setObservacao] = useState('');

  useEffect(() => {
    async function fetchUser(){
      const response = await fetch(`http://localhost:8080/users/${id}`);
      const userData = await response.json();

      setNome(userData.nome);
      setIdade(userData.idade);
      setEmail(userData.email);
      setCidade(userData.cidade);
      setEstado(userData.estado);
      setEscolaridade(userData.escolaridade);
      setObservacao(userData.observacao);
    }
    fetchUser();
  }, [id]);

  const data = {
    nome,
    idade,
    email,
    cidade,
    estado,
    escolaridade,
    observacao
  };;

  async function handleSubmit(event){
    event.preventDefault();

    const response = await fetch(`http://localhost:8080/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok){
      alert("Usuário atualizado com sucesso!")
    } else {
      alert("Erro ao atualizar usuário! Favor, tente novamente.")
    }
  }

  return (
    <div className="container">
      <h1> Editar usuário {id} </h1>

      <div className="form-container">
        <form>
          <div className="row g-2">
            <div className="col-md">
              <FloatingLabel value={nome} onChange={(event) => setNome(event.target.value)} label="Nome">
                <Form.Control type="string" />
              </FloatingLabel>
            </div>

            <div className="col-md">
              <FloatingLabel value={idade} onChange={(event) => setIdade(Number(event.target.value))} controlId="floatInputGrid" label="Idade" style={{width: '5rem'}}>
                  <Form.Control type="number" />
              </FloatingLabel>
            </div>
          </div>
          <br />
          <div className="row g-2">
            <div className="col-md">
              <FloatingLabel value={email} onChange={(event) => setEmail(event.target.value)} controlId="floatInputGrid" label="E-mail">
                <Form.Control type="string" />
              </FloatingLabel>
            </div>
          </div>
          <br />
          <div className="row g-2">
            <div className="col-md">
              <FloatingLabel value={cidade} onChange={(event) => setCidade(event.target.value)} controlId="floatInputGrid" label="Cidade">
                <Form.Control type="string" />
              </FloatingLabel>
            </div>

            <div className="col-md">
              <FloatingLabel value={estado} onChange={(event) => setEstado(event.target.value)} controlId="floatInputGrid" label="Estado">
                <Form.Control type="string" />
              </FloatingLabel>
            </div>
          </div>
          <br />
          <div className="row g-2">
            <div className="col-md">
              <FloatingLabel value={escolaridade} onChange={(event) => setEscolaridade(event.target.value)} controlId="floatInputGrid" label="Escolaridade">
                <Form.Control type="string" />
              </FloatingLabel>
            </div>
          </div>
          <br />
          <div className="row g-2">
            <div className="col-md">
              <FloatingLabel value={observacao} onChange={(event) => setObservacao(event.target.value)} controlId="floatInputGrid" label="Observação">
                <Form.Control type="string" />
              </FloatingLabel>
            </div>
          </div>
          <br />
          <div className='text-center'>
            <button onClick={handleSubmit} type='button' className="btn btn-success btn-acao"> Salvar </button>
          </div> 
        </form>
      </div>
    </div>
  )
}

export default Update;