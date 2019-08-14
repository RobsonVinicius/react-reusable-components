import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Table from './Table';
import Form from './Form';


class App extends Component {
  state = {
    authors: [
      {
        name: 'Bruno',
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
        name: 'Fernanda',
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
