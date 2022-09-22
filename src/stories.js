import Story from "./story";
export default function Stories(){
    const storie = [{nomeS: "9gag", perfilS: "Imagens/9gag.png"},
    {nomeS: "meowed", perfilS: "Imagens/meowed.png"},
    {nomeS: "barked", perfilS: "Imagens/barked.png"},
    {nomeS: "nathanwpyle", perfilS: "Imagens/nathanwpylestrangeplanet.png"},
    {nomeS: "wawawiwa", perfilS: "Imagens/wawawiwacomicsa.png"},
    {nomeS: "respondeai", perfilS: "Imagens/respondeai.png"},
    {nomeS: "filomoderna", perfilS: "Imagens/filomoderna.png"},
    {nomeS: "meme", perfilS: "Imagens/memeriagourmet.png"} ]
    return (
        <div>
            <ul class="stories">
                {storie.map((s, index) => <li><Story s={s} key={index}/></li>)}
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </ul>
        </div>
    );
}
