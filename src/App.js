import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Table from './Table';
import Form from './Form';


class App extends Component {
  state = {
    authors: [
      {
        name: 'Robson Vinicius',
        book: 'React',
        price: '59.90'

      },
      {
        name: 'Andressa Santos',
        book: 'Java',
        price: '99.80'
      }, 
      {
        name: 'Marcos Fontes',
        book: 'Design',
        price: '149.90'
      }, 
      {
        name: 'Fernanda Regina',
        book: 'DevOps',
        price: '100.50'
      },
      {
        name: 'Carina Fragozo',
        book: 'English in Brazil',
        price: '99.90'
      }
    ],
  };

  removeAuthor = (index) => {
    const { authors } = this.state;

    this.setState(
      {
        authors: authors.filter((author, currentpos) => {                    
          return currentpos !== index;
        }),   
      }
    );
  }

  submitListener = author => {
    this.setState({ authors: [...this.state.authors, author] });
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
