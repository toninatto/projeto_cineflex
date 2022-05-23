 import { useParams } from "react-router-dom"
 import axios from 'axios';
 import {useState, useEffect} from 'react';
 import Info from "./info";

 export default function Assentos () {
    const {sessaoId} = useParams()    
    
    const [assentos, setAssentos] = useState ([]);
    
    useEffect( ()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        promise.then(resposta => {
            setAssentos(resposta.data);
            console.log(resposta.data)            
        }
            
        
        );}, [])
        console.log(assentos);
        return (
            <>
            
            <Info>Selecione o(s) assentos(s)</Info>

            <div className="todos-assentos">
             {assentos.seats.map(item => 
                <div className="assento">
                    {item.name}
                </div>
                )}     
            </div>       

            <h1>Aqui está o id:{sessaoId}</h1>
            </>
        )
 }