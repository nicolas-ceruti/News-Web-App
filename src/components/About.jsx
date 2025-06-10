import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub,
    faLinkedin,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import google from '../assets/google.png'

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-8 mx-auto">
                    <h2 className="text-center mb-4">Sobre o FurbNews</h2>
                    <p>O FurbNews é um aplicativo web de notícias inovador, projetado para entregar as notícias mais recentes e relevantes de todo o mundo. Com sua interface de usuário intuitiva e recursos robustos, manter-se informado nunca foi tão fácil.</p>
                    <h4 className="mt-4">Principais Recursos:</h4>
                    <ul>
                        <li>Feed de Notícias Personalizado: Adaptado aos seus interesses, garantindo que você nunca perca histórias importantes.</li>
                        <li>Funcionalidade de Busca: Encontre facilmente artigos sobre tópicos que importam para você.</li>
                        <li>Notificações Push: Mantenha-se atualizado com alertas de notícias de última hora e recomendações personalizadas.</li>
                        <li>Integração com Redes Sociais: Compartilhe artigos facilmente com seus amigos e seguidores.</li>
                        <li>Favoritos e Salvamento: Salve artigos para leitura posterior e organize-os para fácil acesso.</li>
                        <li>Comentários e Discussão: Interaja com outros usuários e compartilhe suas opiniões sobre artigos de notícias.</li>
                    </ul>
                    <h4 className="mt-4">Design da Interface:</h4>
                    <p>O FurbNews possui uma interface elegante e amigável, projetada para proporcionar uma experiência de navegação fluida. Com seu layout limpo e navegação intuitiva, encontrar e consumir artigos de notícias é muito simples.</p>
                    {/* <div className=" mt-5 d-flex justify-content-around align-items-center mx-auto" style={{ maxWidth: '15rem' }}>
                        <a href="https://github.com/yadavmangesh07" className="github">
                            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'black',marginInline:'.5rem' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/mangesh-yadav-65a437237" style={{marginInline:'.5rem' }} className="linkedin">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://twitter.com/__Mangesh" className="twitter social" style={{marginInline:'.5rem',color:'black' }}>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://discord.com/users/OPTIMUS#3832" className="discord social" >
                            <FontAwesomeIcon icon={faDiscord} size="2x" />
                        </a>
                        <div>
                            <a href="mailto:mangeshyadav8736@gmail.com" className="mail social">
                                <img src={google} className="" style={{ height: '44px', width: '44px' }} />
                            </a>
                        </div>
                        
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default About;
