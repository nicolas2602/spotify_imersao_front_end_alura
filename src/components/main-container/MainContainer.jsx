import React from "react";
import './MainContainer.css';
import Header from "../header/Header.jsx";
import ArticlePlaylist from '../article-playlist/ArticlePlaylist.jsx';

const MainContainer = () => {
    return (
        <div class="main-container">
            <Header />
            <ArticlePlaylist />
        </div>
    )
};

export default MainContainer;