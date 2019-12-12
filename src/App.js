import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Table from './Table';
import Form from './Form';
import PopUp from './PopUp';

import ApiService from './ApiService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
    };  
  }

  removeAuthor = (index) => {
    const { authors } = this.state;

    this.setState(
      {
        authors: authors.filter((author, currentpos) => {                    
          return currentpos !== index;
        }),   
      }
    );
    PopUp.displayMessage('remove', 'Livro Removido com sucesso')
  }

  submitListener = author => {
    this.setState({ authors: [...this.state.authors, author] });
    PopUp.displayMessage("success", "Livro Adicionado com sucesso");
  }

  componentDidMount() {
    ApiService.ListAuthors()
      .then(res => {
        this.setState({authors : [...this.state.authors, ...res.data]})
      });
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
