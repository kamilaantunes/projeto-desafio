import React, { useEffect, useState } from "react";
import {useParams, useNavigate } from "react-router-dom";

function Update(){
    const {id} = useParams();
    const [dados, setDados] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(`http://localhost:8080/users/${id}`);
            const data = await response.json();

            setDados(data);
        };
        fetchData();
    }, [id]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:8080/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dados),
        });
        if (response.ok) {
          atualizarDados(dados);
          navigate.push("/");
        } else {
          console.error("Erro ao atualizar dados");
        }
      };

      const atualizarDados = (novosDados) => {
        setDados(novosDados);
      }

      const handleInputChange = (event) => {
        const {name, value} = event.target;
        setDados({...dados, [name]: value});
      }

    return (
        <div>
          <h1>Editar usuário {id}</h1>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={dados.nome || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="idade">Idade:</label>
              <input
                type="number"
                id="idade"
                name="idade"
                value={dados.idade || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={dados.email || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={dados.cidade || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={dados.estado || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="observacao">Observação:</label>
              <textarea
                id="observacao"
                name="observacao"
                value={dados.observacao || ""}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Salvar</button>
          </form>
        </div>
      );
}

export default Update;