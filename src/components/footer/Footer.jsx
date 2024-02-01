import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer class="rodape">
                <div class="descricao__rodape">
                    <div class="item item-text">
                        <span class="text_rod title_rod">Testar o Premium de graça </span>
                        <span class="text_rod subtitle_rod">
                            Inscreva-se para curtir música ilimitada
                            e podcasts só com alguns anúncios. Não precisa de cartão de 
                            crédito
                        </span>
                    </div>
                    <div class="item item-btn">
                        <button class="button__rodape">
                            Inscreva-se grátis
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;