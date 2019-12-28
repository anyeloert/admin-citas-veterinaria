import React, { Component, Fragment } from 'react';
import axios from 'axios'
import Header from './Components/Header'
import Noticias from './Components/Noticias.js'
import Formulario from './Components/Formulario'
class App extends Component {
  
  state={
    noticias:[]
  }
  
  buscarData =  (categoria = 'general') =>{
    axios({
        method:"GET",
        url: `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=2d9648fe03874594aaf92bc2824ef0ee`
    })
    .then(res => {
         let {articles}=res.data 
         this.setState({
           noticias:articles
         })
    }).catch(error => {
        console.log(error);
    })
}
componentDidMount(){
  this.buscarData()
}
  render() {
    return (
     <Fragment>
       <Header
        titulo='Noticias con React API'
       >         
       </Header>
       <div className='container white contenedor-noticias'>
       <Formulario
          buscarData={this.buscarData}
       />
        <Noticias 
          noticias={this.state.noticias}
        >
        </Noticias>
       </div>
     </Fragment>
    );
  }
}

export default App;