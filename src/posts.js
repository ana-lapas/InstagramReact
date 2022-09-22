export default function Posts(){
    const post = [{imgPerfil: "Imagens/meowed.png", usuarioNegrito: "meowed", imgPost: "Imagens/gato-telefone.png", qteLikes: 101598},
    {imgPerfil: "Imagens/barked.png", usuarioNegrito: "barked", imgPost: "Imagens/dog.png", qteLikes: 154869}]
    return (
        <div>
            <ul class="post">
                {post.map((p) =><li><div class="tituloPost">
                    <div class="usuario">
                        <img class="userP" src={p.imgPerfil}/>
                        <p class="negrito">{p.usuarioNegrito}</p>
                    </div>
                    <div class="direita"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                </div>
                <div class="imagemP">
                    <img class="imgP" src={p.imgPost}/>
                </div>
                <div class="icones">
                    <div class="esquerda">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="direita">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="comentariosP">
                    <img class="comentarioI" src="Imagens/respondeai.png"/>
                    <div class="comentario">
                         <p class="normal">Curtido por</p>&nbsp;<p class="negrito">respondeai</p>&nbsp;<p class="normal">e outras</p>&nbsp;<p class="negrito">{p.qteLikes} pessoas</p>
                    </div>
                </div></li> )}                
            </ul>            
        </div>
    );
}
