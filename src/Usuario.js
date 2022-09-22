import React from "react";
export default function Usuario(){
    const [usuarioNovo, setUsuarioNovo] = React.useState("catanacomics");
    const [imgPerfil, setImgPerfilNova] = React.useState("Imagens/catanacomics.png");

    function alterarImg(){
        const novaImgPerfil = prompt("Qual é o url da sua nova imagem de perfil?");
        setImgPerfilNova(novaImgPerfil);
    }

    function alterarUsuario(){
        const novoUserName = prompt("Qual será seu novo nome de usuário?");
        setUsuarioNovo(novoUserName);
    }

    return (
        <div>
            <div class="sidebar-usuario">
                <img src={(imgPerfil === "" || imgPerfil === null) ? alert("Insira uma foto no formato URL") : imgPerfil } onClick={alterarImg} alt=""/>
                <div class="infoU">
                    <p class="negrito">{(usuarioNovo === "" || usuarioNovo === null) ? alert("Insira um nome de usuário") : usuarioNovo} </p>
                    <p class="nomeU">Catana<ion-icon onClick={alterarUsuario} name="pencil"></ion-icon></p>
                </div>
            </div>
        </div>
    )
}
