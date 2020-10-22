import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    vinhos: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    console.log(response.data);
    this.setState({ vinhos: response.data });
  }

   render() {

   const { vinhos } = this.state;
   return (
     <div>
       <h1>Listar os Vinhos</h1>

       {vinhos.data.products.map(vinho => (
          
        <li key={vinho.product.prices}>
         <h2>
          <strong>Título: </strong>
            
         </h2>
       </li>
      ))}
   </div>
  );



    
 };
};

export default App;
