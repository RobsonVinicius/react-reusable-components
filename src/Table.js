import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const lines = props.authors.map((line, index) => {
    return (
        <tr key={index}>
          <td>{line.nome}</td>
          <td>{line.livro}</td>
          <td>{line.preco}</td>
          <td><button>Remover</button></td>
        </tr>
    );
  });

  return (
    <tbody>
      {lines}
    </tbody>
  );
}

class Table extends Component {
  render() {
    const { authors } = this.props;    

    return (
      <table>
        <TableHead />
        <TableBody authors = { authors } />
      </table>
    );
  }
}

export default Table; 