import React, { useState } from 'react';
import '../../css/header.css';
import Header from '../Header.js';
import axios from 'axios';
import { Link } from "react-router-dom";

function NewClient() {
  const baseUrl = "https://localhost:5001/api/cliente/";
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const requestPost = async () => {
    await axios.post(baseUrl, {
        name,
        birthDate,
        gender
    })
      .then( () => {
        alert("Cliente cadastrado com sucesso!");
        window.location.reload();
      })
      .catch(error => {
        Object.values(error.response.data.errors).forEach(element => {
          alert(element[0])
        });
      })
  }

  const optionsList = [
    <li key="home"><Link to= "/">Home</Link></li>,
    <li key="post"><Link to="/add/client">Cadastrar Cliente</Link></li>,
    <li key="client"><Link to= "/clients">Consultar Clientes</Link></li>,
  ]

  return (
    <>
    <Header className="header" options={optionsList}/>
      <form onSubmit = {() => requestPost()}>

        <label>Nome:</label>
        <input type="text" value={name} onChange={value => setName(value.target.value)}></input>
        
        <br/>
        <label>Data de nascimento:</label>
        <input type="text" value={birthDate} onChange={value => setBirthDate(value.target.value)}></input>
        
        <br/>
        <label>Gênero:</label>
        <input type="text" value={gender} onChange={value => {
          setGender(value.target.value)
        }
        }></input>
        
        
      </form>
    <br/>
    <input type="submit" onClick={() => requestPost()} />
    </>
  );
}

export default NewClient;
