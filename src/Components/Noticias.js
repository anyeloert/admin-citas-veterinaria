import React from 'react';
import Noticia from './Noticia.js'
import PropTypes from 'prop-types'

const Noticias = ({noticias}) => 
     (
        <div className='row'>
            {noticias.map(noticia => (
                <Noticia                    
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    );
Noticia.propTypes = {
    noticias : PropTypes.array.isRequired
}

export default Noticias;