import React, { Component } from 'react';
import "./styles.css";

import FormValidator from '../FormValidator'; 
import PopUp from '../PopUp';

class Form extends Component {

  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'Insira o nome do autor'
      },
      {
      field: 'book',
      method: 'isEmpty',
      validWhen: false,
      message: 'Insira o título do livro'
      },
      {
      field: 'price',
      method: 'isInt',
      args: [{min: 0, max: 99999}], 
      validWhen: true,
      message: 'Insira um valor númerico'
      }
    ]);

    this.stateInitial = {
      name:'',
      book: '', 
      price: '',
      validation: this.validator.valid()
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
    const validation = this.validator.validate(this.state);

    if(validation.isValid) {
      this.props.submitListener(this.state);
      this.setState(this.stateInitial);
    } else {
      const {name, book, price} = validation;
      const fields = [name, book, price];

      const invalidFields = fields.filter(elem => {
        return elem.isInvalid;
      });
      invalidFields.forEach(field => {
        PopUp.displayMessage('error', field.message);
      });
    }
  }

  
  render() {

    const { name, book, price } = this.state;

    return (
      <form className="form-inline justify-content-center mt-5">
        <div className="row ">          
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