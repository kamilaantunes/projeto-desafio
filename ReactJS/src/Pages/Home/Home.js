import React, { useState } from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import "./Home.css";

function Home(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState(null);
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [escolaridade, setEscolaridade] = useState("");
    const [observacao, setObservacao] = useState("");

        // Função de requisição à API
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            nome,
            idade,
            email,
            cidade,
            estado,
            escolaridade,
            observacao
        };

        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok){
            alert("Cadastro realizado com sucesso!");
            clearForm();
        } else {
            alert("Ocorreu um erro ao realizar o cadastro!")
        }
    }

        // Função para limpar os dados do formulário após envio
    const clearForm = () => {
        setNome("");
        setIdade(null);
        setEmail("");
        setCidade("");
        setEstado("");
        setEscolaridade("");
        setObservacao("");
    }

    return (
        <div className="container">
            <div className="image">
                <div className="form-container">
                    <form>
                        <div className="row g-2">
                            <div className="col-md">
                                <FloatingLabel value={nome} onChange={(event) => setNome(event.target.value)} controlId="floatInputGrid" label="Nome" style={{width: "18rem"}}>
                                    <Form.Control type="string" />
                                </FloatingLabel>
                            </div>

                            <div className="col-md">
                                <FloatingLabel value={idade} onChange={(event) => setIdade(Number(event.target.value))} controlId="floatInputGrid" label="Idade" style={{width: "5rem"}}>
                                    <Form.Control type="number" />
                                </FloatingLabel>
                            </div>
                        </div> <br />

                        <div className="row g-2">
                            <div className="col-md">
                                <FloatingLabel value={email} onChange={(event) => setEmail(event.target.value)} controlId="floatInputGrid" label="E-mail">
                                    <Form.Control type="string" />
                                </FloatingLabel>
                            </div>
                        </div> <br />

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
                        </div> <br />

                        <div className="row g-2">
                            <div className="col-md">
                                <FloatingLabel value={escolaridade} onChange={(event) => setEscolaridade(event.target.value)} controlId="floatInputGrid" label="Escolaridade">
                                    <Form.Control type="string" />
                                </FloatingLabel>
                            </div>
                        </div> <br />

                        <div className="row g-2">
                            <div className="col-md">
                                <FloatingLabel value={observacao} onChange={(event) => setObservacao(event.target.value)} controlId="floatInputGrid" label="Observação">
                                    <Form.Control type="string" />
                                </FloatingLabel>
                            </div>
                        </div> <br />

                        <div className="text-center">
                            <button onClick={handleSubmit} type="button" className="btn btn-success btn-acao"> Salvar </button>
                            
                            {/* <NavLink onClick={clearForm} type="button" className="btn btn-outline-danger btn-acao" style={{marginLeft: "2rem"}}>
                                Cancelar
                            </NavLink>   */}
                        </div> 
                    </form>
                </div>

                <div className="image-container">
                    <img src={"https://play-lh.googleusercontent.com/ciQ12Z9XNj32qF2NjG-pbC8cIhz30OnthjptsHtzvi2WU5s2-3w5vfypa-OaP58O"} alt="Imagem" />
                </div>
            </div>

         </div>
    )
}

export default Home;