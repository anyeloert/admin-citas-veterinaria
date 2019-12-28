import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Formulario extends Component {
    state={
        categoria:'general'
    }
    handleChange = e => {
        this.setState({
            categoria:e.target.value
        }, ()=>{
            this.props.buscarData(this.state.categoria)
        })
    }
    render() {
        return (
            <div className='buscador row'>
                <div className='col s12 m6 offset-m3'>
                    <form>
                        <h3 className='card-title center'>Seleccione por Categoría</h3> 
                        <div className='input-field s12 m5 l2'>
                            <select onChange={this.handleChange}>
                                <option value='general'>General</option>
                                <option value='business'>Negocios</option>
                                <option value='entertainment'>Entretenimiento</option>
                                <option value='health'>Salud</option>
                                <option value='science'>Ciencia</option>
                                <option value='sports'>Deportes</option>
                                <option value='technology'>Tecnología</option>
                            </select>
                        </div>
                    </form> 
                </div>              
            </div>
        );
    }
}
Formulario.propTypes = {
    buscarData:PropTypes.func.isRequired
}

export default Formulario;