export default function Sugestao({s}){
    return (
        <div>
            <div class="usuarioS">
                <div class="user">
                    <img class="sugestao" src={s.userImg} alt=""/>
                    <div class="infoU">
                        <p class="negrito">{s.user}</p>
                        <p class="nomeU">Segue você</p>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
        </div>);
}