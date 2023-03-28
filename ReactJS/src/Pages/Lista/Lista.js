import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';

function Lista(){
    const [dados, setDados] = useState([]);

      // Busca dados da api
    async function fetchData() {
      const response = await fetch('http://localhost:8080/users');
      const data = await response.json();
    
      setDados(data);
    }

      // Definindo fetchData como global, assim posso acessá-la em outra function
    useEffect(() => {
      fetchData();
    }, []);
  

      // Delete usuário por id
    async function handleDelete(id){
      const confirmed = window.confirm("Tem certeza que deseja excluir o usuário selecionado?");
      
      if (!confirmed){
        alert("Exclusão cancelada!");
        return;
      }

      const response = await fetch(`http://localhost:8080/users/${id}`, {
        method: "DELETE"
      });

      if (response.ok){
        fetchData();    // Se a exclusão for bem sucedida, atualiza a lista de dados.
        alert("Item excluído com sucesso!");
      }
    }

  return <div className='table table responsive'>
    <table className='table table-bordered table-hover' style={{width: '71rem',marginLeft: '32vh'}}>
      <thead>
        <tr className="text-center">
          <th scope="col" style={{width: '2rem'}}> # </th>
          <th scope="col"> Nome </th>
          <th scope="col"style={{width: '2rem'}}> Idade </th>
          <th scope="col"> E-mail </th>
          <th scope="col"> Cidade </th>
          <th scope="col"> Estado </th>
          <th scope="col"> Observação </th>
          <th scope="col" style={{width: '2rem'}}> Ações </th>
        </tr>
      </thead>

      <tbody>
        {dados.map((user) => (
          <tr key={user.id}>
            <td> {user.id} </td>
            <td> {user.nome} </td>
            <td> {user.idade} </td>
            <td> {user.email} </td>
            <td> {user.cidade} </td>
            <td> {user.estado} </td>
            <td> {user.observacao} </td>
            <td className="text-center">
              <NavLink to={`/update/${user.id}`}> <i className="bi bi-brush" /> </NavLink>
              <NavLink to='#' onClick={() => handleDelete(user.id)} style={{background: 'none', color: '#FF0000'}}> <i className="bi bi-trash" /> </NavLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

export default Lista;