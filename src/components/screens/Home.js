import React from 'react'; //, { useState }
import '../../css/header.css';
import Header from '../Header.js';

function Home(props) {

  return (
    <>
    <Header className="header" options={props.options}/>
    {props.texto}
    </>
  );
}
/*
  <li>
  <a href="../index.html">Home</a>
  </li>

  <li>
  <a href="../index.html">Inclusão</a>
  </li>

  <li>
  <a href="../index.html">Alteração completa</a>
  </li>

  <li>
  <a href="../index.html">Alteração parcial</a>
  </li>

  <li>
  <a href="../index.html">Encontrar paginado</a>
  </li>

  <li>
  <a href="../index.html">Encontrar único</a>
  </li>

  <li>
  <a href="../index.html">Desativar</a>
  </li>

  <li>
  <a href="../index.html">Reativar</a>
  </li>
*/

export default Home;