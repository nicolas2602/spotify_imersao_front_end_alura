import React from "react";
import './ArticlePlaylist.css';
import card1 from '../../assets/playlist/1.jpeg';
import card2 from '../../assets/playlist/2.png';
import card3 from '../../assets/playlist/3.jpeg';
import card4 from '../../assets/playlist/4.jpeg';
import card5 from '../../assets/playlist/5.jpeg';
import card6 from '../../assets/playlist/6.jpeg';
import card7 from '../../assets/playlist/7.jpeg';
import card8 from '../../assets/playlist/8.jpeg';
import card9 from '../../assets/playlist/9.jpeg';
import Card from "../card/Card";

const ArticlePlaylist = () => {
    return (
        <>
            <article className="article">
                <div id="result-playlists">
                    <div className="article-title">
                        <h1>Boa tarde</h1>
                    </div>
                    <div className="article-subtitle">
                        <h1>Navegar por todas as seções</h1>
                    </div>
            
                    <div className="article-card">
                        <div className="line-card coluna">
                            <Card cor="red" msg="Boas festas" image={card1} alt="Boa tarde" />
                            <Card cor="green" msg="Feitos para você" image={card2} alt="Feitos para você" />
                            <Card cor="yellow" msg="Lançamentos" image={card3} alt="Lançamentos" />
                            <Card cor="blue" msg="Creators" image={card4} alt="Creators" />
                            <Card cor="silver" msg="Para treinar" image={card5} alt="Para treinar" />
                            <Card cor="brown" msg="Podcast" image={card6} alt="Podcast" />
                            <Card cor="red" msg="Samba e Pagode" image={card7} alt="Samba e Pagode" />
                            <Card cor="green" msg="Funk" image={card8} alt="Funk" />
                            <Card cor="yellow" msg="MPB" image={card9} alt="MPB" />
                        </div>
                    </div>
                </div>

                <div id="result-artist" className="hidden">
                    <div className="grid-container">
                      <div className="artist-card" id="">
                        <div className="card-img">
                          <img id="artist-img" className="artist-img" />
                          <div className="play">
                            <span className="fa fa-solid fa-play"></span>
                          </div>
                        </div>
                        <div className="card-text">
                          <a title="Foo Fighters" className="vst" href="">
                            <span className="artist-name" id="artist-name"></span>
                            <span className="artist-categorie">Artista</span>
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
            </article>
        </>
    )
};

export default ArticlePlaylist;