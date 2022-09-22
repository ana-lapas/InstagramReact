export default function Navbar(){
    return (
        <div>
            <div class="topo">
                <div class="itensTopo">
                    <div class="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="barraSeparadora"></div>
                        <img src="Imagens/logo.png" alt="" />
                    </div>
                    <div class="pesquisa">
                        <input type="text" placeholder="Pesquisar"></input>
                    </div>
                    <div class="opcoes">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}