import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../Components/Header';
import Table from '../../Components/Table';
import Form from '../../Components/Form';
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiService';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
    };  
  }

  removeAuthor = id => {

    const { authors } = this.state;

    const updatedAuthors = authors.filter(author => {
      return author.id !== id;
    });
    ApiService.RemoveAuthor(id)      
      .then (res => {
        if(res.message === 'deleted') {
          this.setState({authors : [...updatedAuthors]})
          PopUp.displayMessage('remove', 'Livro Removido com sucesso');
        }
      })
      .catch(err => PopUp.displayMessage('remove', 'Erro na comunicação com o servidor ao tentar remover o livro'));
  }

  submitListener = author => {
    ApiService.CreateAuthor(JSON.stringify(author))      
      .then(res => {
        if(res.message === 'success') {
          this.setState({ authors: [...this.state.authors, res.data] });
          PopUp.displayMessage("success", "Livro Adicionado com sucesso");
        }        
      })
      .catch(err => PopUp.displayMessage('remove', 'Erro na comunicação com o servidor ao tentar adicionar o livro'));
  }

  componentDidMount() {
    ApiService.ListAuthors()      
      .then(res => {
        if(res.message === 'success') {
          this.setState({authors : [...this.state.authors, ...res.data]})
        }
      })
      .catch(err => PopUp.displayMessage('remove', 'Erro na comunicação com o servidor ao tentar listar os livros'));
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <div className="container">          
          <Table authors = { this.state.authors } removeAuthor = { this.removeAuthor } />
          <Form submitListener={ this.submitListener } />
        </div>
      </Fragment>
    );
  }
}
export default App;
