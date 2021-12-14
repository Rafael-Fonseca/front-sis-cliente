import React, { useEffect, useState } from 'react';
import '../../css/header.css';
import Header from '../Header.js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Clients(props) {
  const baseUrl = "https://localhost:5001/api/cliente/";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const take = "/2";
  const navigate = useNavigate();
  let url = baseUrl + page + take;  

  const requestGet = async () => {
    await axios.get(url)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const requestDelete = async (id) => {
    let delUrl = baseUrl + id
    await axios.delete(delUrl)
      .then(() => {
        alert("Cliente deletado com sucesso!");
        window.location.reload();
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(()=>{
    requestGet();
  },[page])

  return (
    <>
    <Header className="header" options={props.options}/>
    <table>

      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de nascimento</th>
          <th>Gênero</th>
        </tr>
      </thead>

      <tbody>
        {data.data !== undefined 
          && data.data.map(cliente=>(
            <tr key={cliente.id}>
              <td>{cliente.name}</td>
              <td>{cliente.birthDate}</td>
              <td>{cliente.gender}</td>
              <td>
                <button onClick={() => {navigate(`/client/${cliente.id}`)}} >editar</button>

                <button onClick={() => requestDelete(cliente.id)}>excluir</button>
              </td>
            </tr>
          ))
        
        }
      </tbody>
    </table>

    { page - 1 > 0 &&
      <button onClick={() => setPage(page - 1)}>Anterior</button>
    }

    {page + 1 <= data.total_pages &&
      <button onClick={() => setPage(page + 1)}>Próxima</button>
    }
    
    
    </>
  );
}

export default Clients;