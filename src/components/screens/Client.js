import React, { useEffect, useState } from 'react';
import '../../css/header.css';
import Header from '../Header.js';
import axios from 'axios';
import { useParams, Navigate, Link } from "react-router-dom";

function Client() {
  const baseUrl = "https://localhost:5001/api/cliente/";
  const {id} = useParams();
  const url = baseUrl + id;
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [birthDate, setBirthDate] = useState([]);
  const [gender, setGender] = useState([]);
  const [redirect, setRedirect] = useState(false);
  

  const requestGetById = async () => {
    await axios.get(url)
      .then(response => {
        setData(response.data);
        setName(response.data.name);
        setBirthDate(response.data.birthDate);
        setGender(response.data.gender);
      }).catch(error => {
        console.log(error);
      })
  }

  const requestPatch = async () => {
  const jsonPatchDoc = [
      {
        "path": "Name",
        "op": "replace",
        "value": name,
      },
      {
        "path": "BirthDate",
        "op": "replace",
        "value": birthDate,
      },
      {
        "path": "Gender",
        "op": "replace",
        "value": gender,
      }
  ]
    await axios.patch(url, jsonPatchDoc)
      .then( () => {
        alert("Cliente alterado com sucesso!");
        setRedirect(true);
      })
      .catch(error => {
        Object.values(error.response.data).forEach(element => {
          alert(element[0])
        });
      })
  }

  useEffect(()=>{
    requestGetById();
  },[])

  const optionsList = [
    <li key="home"><Link to= "/">Home</Link></li>,
    <li key="post"><Link to="/">Cadastrar Cliente</Link></li>,
    <li key="client"><Link to= "/clients">Consultar Clientes</Link></li>,
  ]

  return (
    <>
      {redirect &&
        <Navigate to="/clients" />
      }

    <Header className="header" options={optionsList}/>
    {data.name !== undefined &&
      <form onSubmit = {() => requestPatch()}>

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
    }
    <br/>
    <input type="submit" onClick={() => requestPatch()} />
    </>
  );
}

export default Client;
