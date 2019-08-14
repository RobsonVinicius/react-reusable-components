import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Table from './Table';
import Form from './Form';


class App extends Component {
  state = {
    authors: [
      {
        name: 'Paulo',
        book: 'React',
        price: '1000'

      },
      {
        name: 'Daniel',
        book: 'Java',
        price: '99'
      }, 
      {
        name: 'Marcos',
        book: 'Design',
        price: '150'
      }, 
      {
        name: 'Bruno',
        book: 'DevOps',
        price: '100'
      },
      {
        name: 'Karina',
        book: 'English in Brazil',
        price: '100'
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
      <Fragment className="container">
        <Header/>
        <Table authors = { this.state.authors } removeAuthor = { this.removeAuthor } />
        <Form submitListener={ this.submitListener } />
      </Fragment>
    );
  }
}
export default App;
