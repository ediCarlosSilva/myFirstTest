import React from 'react';
import { Link } from 'react-router-dom';
import AuthorBadge from '../author-badge'

import './style.css';

import imagem1 from '../../assets/images/landscape1.jpg';
import imagem2 from '../../assets/images/landscape2.jpg';
import imagem3 from '../../assets/images/landscape3.jpg';

export default function Post({ post }) {
    
    // função para escolher imagem aleatória no blog
    const escolheImagem = () => {
        return imagens[Math.floor((Math.random() * 3))];
    }
    
    const imagens = [imagem1, imagem2, imagem3];

    return (

        <section className="post">
            <div className='post--imagem'>
                <img src={escolheImagem()} alt="Imagem de uma paisagem bonita." />
            </div>

            <div className="post--conteudo">

                <h2 className='post--titulo'>{post.title}</h2>

                <p className='post--descricao'>{post.body}</p>

                <AuthorBadge />
            </div>
        </section>
    )
}