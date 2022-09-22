export default function Story({s}){
    return(<div>
            <div class="imagemS">
                <img class="fundo" src="Imagens/stories_background.jpg" alt=""/>
                <img class="perfilS" src={s.perfilS} alt="" /></div>
                <div class="nomeS"><p>{s.nomeS}</p></div>
            </div>)
}