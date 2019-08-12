import React, { Component } from 'react';
import './App.css';
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
      <>
        <Table authors = { this.state.authors } removeAuthor = { this.removeAuthor } />
        <Form submitListener={ this.submitListener } />
      </>
    );
  }
}
export default App;
