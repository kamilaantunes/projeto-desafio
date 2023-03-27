import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';

function Lista(){
    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8080/users');
            const data = await response.json();
          
            setDados(data);
          }
          
        fetchData();
    }, [])

    // console.log(dados);

    function handleEditar(id){
        window.location.href = `/update/${id}`
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
                    <th scope="col"> Ações </th>
                </tr>
            </thead>

            <tbody>
              {dados.map((item) => (
                <tr key={item.id}>
                  <td> {item.id} </td>
                  <td> {item.nome} </td>
                  <td> {item.idade} </td>
                  <td> {item.email} </td>
                  <td> {item.cidade} </td>
                  <td> {item.estado} </td>
                  <td> {item.observacao} </td>
                  <td>
                    <NavLink onClick={() => handleEditar(item.id)} > <i class="bi bi-brush" /> </NavLink>
                    <NavLink to='#' /*onClick={() => props.clickDelete(epi.id)}*/> <i class="bi bi-trash" /> </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
}

export default Lista;