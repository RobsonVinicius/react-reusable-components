import React, { Component } from 'react';
import './App.css';
import Table from './Table';

class App extends Component {
  authors = [
    {
      nome: 'Paulo',
      livro: 'React',
      preco : '1000'

    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    }, 
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    }, 
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    },
    {
      nome: 'Karina',
      livro: 'English in Brazil',
      preco: '100'
    }
  ];

  render() {
    return (
      <div className="App">
        <Table authors = { this.authors } />
      </div>
    );
  }
}
export default App;
