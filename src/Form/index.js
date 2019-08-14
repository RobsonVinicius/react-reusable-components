import React, { Component } from 'react';

import "./styles.css";

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

  inputListener = event => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    });
  } 

  submitForm = () => {
    this.props.submitListener(this.state);
    this.setState(this.stateInitial);
  }

  
  render() {

    const { name, book, price } = this.state;

    return (
      <form className="form-inline justify-content-center mt-5">
        <div className="row ">
          <div className="col-3">
            <label htmlFor="name" className="col-form-label"></label>
            <input 
              className="form-control"
              placeholder="Nome"
              id="name"
              type="text"
              name="name"
              value={name} 
              onChange = {this.inputListener} />      
          </div>
          <div className="col-3">
            <label htmlFor="book" className="col-form-label"></label>
            <input 
              className="form-control"
              placeholder="Livro"
              id="book"
              type="text"
              name="book"
              value={book}
              onChange = {this.inputListener} />
          </div>
          <div className="col-3">
            <label htmlFor="price" className="col-form-label"></label>
            <input 
              className="form-control"
              placeholder="Preço"
              id="price"
              type="text"
              name="price" 
              value={price}
              onChange = {this.inputListener} />
          </div>
          <div className="col-3">
            <button className="btn btn-outline-success btn-save" onClick={this.submitForm} type="button">Salvar</button>
          </div>
        </div>
        

      </form>
    )
  };  
}


export default Form;