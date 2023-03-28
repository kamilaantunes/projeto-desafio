import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import logo from './logo.svg';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home/Home';
import Lista from './Pages/Lista/Lista';
import Update from './Pages/Update/Update';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/lista' element={<Lista />} />
      </Routes>
    </BrowserRouter>
  )

  // {const [nome, setNome] = useState('');
  // const [lastNome, setLastNome] = useState('');
  // const [email, setEmail] = useState('');
  // const [idade, setIdade] = useState('');
  // const [cidade, setCidade] = useState('');
  // const [estado, setEstado] = useState('');
  // const [escolaridade, setEscolaridade] = useState('');
  // // const [telefone, setTelefone] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const data = {
  //     nome,
  //     lastNome,
  //     email,
  //     estado,
  //     idade,
  //     cidade,
  //     estado,
  //     escolaridade
  //     // telefone
  //   };

  //   const response = await fetch('http://localhost:8080/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   if (response.ok){
  //     alert('Cadastro realizado com sucesso!');
  //   } else {
  //     alert('Ocorreu um erro ao realizar o cadastro! ')
  //   }
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>
  //       Nome:
  //       <input type='string' value={nome} onChange={(event) => setNome(event.target.value)} />
  //     </label>
  //     <br />
  //     <label>
  //       Último nome
  //       <input type='string' value={lastNome} onChange={(event) => setLastNome(event.target.value)} />
  //     </label>
  //     <br />

  //     <label>
  //       E-mail
  //       <input type='string' value={email} onChange={(event) => setEmail(event.target.value)} />
  //     </label>

  //     <br />
      
  //     <label>
  //       Idade
  //       <input type='number' value={idade} onChange={(event) => setIdade(Number(event.target.value))} />
  //     </label>
  //     <br />
  //     <label>
  //       Cidade
  //       <input type='string' value={cidade} onChange={(event) => setCidade(event.target.value)} />
  //     </label>
  //     <br />
      
  //     <label>
  //       Estado
  //       <input type='string' value={estado} onChange={(event) => setEstado(event.target.value)} />
  //     </label>
  //     <br />
  //     <label>
  //       Escolaridade
  //       <input type='string' value={escolaridade} onChange={(event) => setEscolaridade(event.target.value)} />
  //     </label>
  //     <br />
  //     {/* <label>
  //       Telefone
  //       <input type='number' value={telefone} onChange={(event) => setTelefone(Number(event.target.value))} />
  //     </label> */}
  
  //     <button type='submit'> Cadastrar </button>
  //   </form>
  // )}
}



export default App;
