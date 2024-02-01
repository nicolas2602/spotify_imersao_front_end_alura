import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.css';
import './style/global.css';
import './style/vars.css';
import ArticlePlaylist from './components/article-playlist/ArticlePlaylist.jsx';
import MainContainer from './components/main-container/MainContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/footer/Footer';
import './script.js';

/* TypeScript*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Sidebar />

    <main>
          <MainContainer />
    </main>
    
    <Footer/>

    <script type="text/javascript" src="./script.js"></script>
  </>
);
