import React from 'react';
import PropTypes from 'prop-types'

const Noticia = ({noticia}) => {
    const {description, title, url, urlToImage, source}= noticia
    const imagen = (urlToImage) ?
        <div className='card-image'>
            <img src={urlToImage} alt={title} />
            <span className='card-title blue-text text-darken-4'>{source.name}</span>
        </div>
    : null
    return (
        <div className='col s12 m6 l4'>
            <div className='card'>
                {imagen}
                <div className='card-context'>
                    <span className='card-title'>{title}</span>
                    <p >{description}</p>
                </div>
                <div className='card-action'>
                    <a href={url} rel="noopener noreferrer" className="waves-effect waves-light btn" target='_blank'>
                        Ver más
                    </a>
                </div>
            </div>
        </div>
    );
};

Noticia.propTypes={
    noticia : PropTypes.object.isRequired
}

export default Noticia;