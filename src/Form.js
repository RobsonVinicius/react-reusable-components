import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);

    this.stateInitial = {
      name:'',
      book: '', 
      price: '',
    }

    this.state = this.stateInitial;

  }

  render() {

    const { name, book, price } = this.state;

    return (
      <form>
        <label htmlFor="name">Nome</label>
        <input 
          id="name"
          type="text"
          name="name"
          value={name} />      
        
        <label htmlForm="livro">Livro</label>
        <input 
          id="book"
          type="text"
          name="book"
          value={book} />
        
        <label htmlFor="price">Preço</label>
        <input 
          id="price"
          type="text"
          name="price" 
          value={price}/>
        
        <button type="button">Salvar</button>

      </form>
    )
  };  
}


export default Form;