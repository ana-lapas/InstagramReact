import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function Sidebar(){
    return (
            <div> 
                <div class="sideBar">
                    <Usuario />
                    <Sugestoes />
                    <div class="texto1">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • <br></br>
                            Termos • Localizações • Contas mais relevantes • Hashtags • 
                            Idioma
                    </div>
                    <div class="texto2">© 2021 INSTAGRAM DO FACEBOOK</div>
                </div>
            </div>
    )
}

