import React from "react";
export default function Post({p}){    
    const iconeBookN = "bookmark-outline";
    const [book, setBook] = React.useState(iconeBookN);
    function salvarPost(){
        const novoIcon="bookmark";
        setBook(novoIcon);
    }
    const [curtida, setCurtida] = React.useState("heart-outline");
    function curtirImg(){
        if(curtida === "heart-outline"){
            setCurtida("heart");
            p.nCurtidas += 1;
        } else {
            setCurtida("heart-outline");
            p.nCurtidas -= 1;
        }        
    }
    return(<div>
             <div class="post">
                <div class="tituloPost">
                    <div class="usuario">
                        <img class="userP" src={p.imgUser} alt=""/>
                        <p class="negrito">{p.user}</p>
                    </div>
                    <div class="direita"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                </div>
                <div class="imagemP">
                    <img class="imgP" src={p.imgPost} onClick={curtirImg} alt=""/>
                 </div>
                <div class="icones">
                    <div class="esquerda">
                        <ion-icon name={curtida} /*</div>style:{color={corCoracao}}*/  onClick={curtirImg}></ion-icon>
                       <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="direita">
                        <ion-icon name={book} onClick={salvarPost}></ion-icon>
                    </div>
                </div>
                <div class="comentariosP">
                    <img class="comentarioI" src={p.imgPCurtiu} alt=""/>
                    <div class="comentario">
                         <p class="normal">Curtido por</p>&nbsp;<p class="negrito">{p.userPCurtiu}</p>&nbsp;<p class="normal">e outras</p>&nbsp;<p class="negrito">{p.nCurtidas} pessoas</p>
                    </div>
                </div>        
            </div>
        </div>
    )    
}