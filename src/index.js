import ReactDOM from "react-dom";
import "./estilos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./header.js"
import Filmes from "./filmes"
import Secoes from "./secoes";
import Assentos from "./assentos";
import Sucesso from "./sucesso";


function App () {
    return (
        <BrowserRouter>
        <Topo/>
        
        <Routes>        
        <Route path="/" element={<Filmes/>}/>
        <Route path="/filme/:filmeId" element={<Secoes/>}/>
        <Route path="/sessao/:sessaoId" element={<Assentos/>}/>
        <Route path="/sucesso" element={<Sucesso/>}/>
        </Routes>

        </BrowserRouter>
       
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));