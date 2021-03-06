import React, { Component } from 'react';

import './styles.css';

const TableHead = () => {
  return (
    <thead>
      <tr>        
        <th scope="col">Livros</th>
        <th scope="col">Autores</th>
        <th scope="col">Preços</th>
        <th scope="col">Remover</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const lines = props.authors.map((line) => {
    return( 
      <tr className="t-row" key={line.id}>        
        <td>{line.book}</td>
        <td>{line.name}</td>
        <td>{line.price}</td>
        <td><button className="btn btn-outline-danger" onClick={ () => props.removeAuthor(line.id)} >Remover</button></td>
      </tr>
    );
 });

 return(
     <tbody>
       {lines}
     </tbody>
 );
}
 

class Table extends Component {
  render() {
    const { authors, removeAuthor } = this.props;    

    return (
      <table className="table text-center mt-5">
        <TableHead />
        <TableBody authors = { authors } removeAuthor = { removeAuthor } />
      </table>
    );
  }
}

export default Table; 