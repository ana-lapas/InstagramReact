import Sugestao from "./sugestao";
export default function Sugestoes(){
    let sugestaoIndividual = [{user: "bad.vibes.meme", userImg: "Imagens/badvibesmemes.png"},
    {user: "razoes.para.acreditar", userImg: "Imagens/razoesparaacreditar.png"},
    {user: "childbirdart", userImg: "Imagens/chibirdart.png"},
    {user: "adoreableanimals", userImg: "Imagens/adorableanimals.png"},
    {user: "smallcutecats", userImg: "Imagens/smallcutecats.png"}]
    return(
        <div>
            <div class="sugestoes">
                <div class="titulos">
                    <p class="sugPV">Sugestões para você</p>
                    <p class="verMais">Ver tudo</p>
                </div> 
                <ul class="conteudo">                    
                    {sugestaoIndividual.map((s, index) => <li><Sugestao s={s} key={index} /> </li>)}
                </ul>
        </div>
    </div>
    )
}
