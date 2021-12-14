import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home.js";
import Clients from "./screens/Clients.js";
import Client from "./screens/Client.js";
import NewClient from "./screens/NewClient.js";

function App() {
  const optionsList = [
    <li key="home"><Link to= "/">Home</Link></li>,
    <li key="client"><Link to= "/clients">Clientes</Link></li>,
  ]

  const texto = <text><br/>
  Clique em sistema para acessar o sistema de clientes.<br/>
  Esta API foi desenvolvida com o intuito de aprender C#, ASP.NET CORE
   5.0 e React js.</text>

  const systemOptions = [
    <li key="home"><Link to= "/">Home</Link></li>,
    <li key="post"><Link to="/add/client">Cadastrar Cliente</Link></li>,
    <li key="get"><Link to="/clients">Consultar Clientes</Link></li>
  ]

return (
  <>
    <Routes>
      <Route path="/" element={<Home options={optionsList} texto={texto}/>} />
      <Route path="/add/client" element={<NewClient options={systemOptions} />} />
      <Route path="/clients" element={<Clients options={systemOptions} />} />
      <Route path="/client/:id" element={<Client />} />   

    </Routes>
      
    </>
  );
}

export default App;
