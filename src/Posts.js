import React from "react";
import Post from "./Post";
export default function Posts(){    
    let postIndividuais = [{user: "meowed", imgUser: "Imagens/meowed.png", imgPost: "Imagens/gato-telefone.png", 
    imgPCurtiu: "Imagens/respondeai.png", userPCurtiu: "respondeai", nCurtidas: 101594}, 
    {user: "barked", imgUser: "Imagens/barked.png", imgPost: "Imagens/dog.png", 
    imgPCurtiu: "Imagens/adorableanimals.png", userPCurtiu: "adoreableanimals", nCurtidas: 15987}]
    
    return (<div>
                <ul>
                    {postIndividuais.map((p, index) => <li><Post p={p} key={index} /></li>)}                        
                </ul>            
            </div>)
}
