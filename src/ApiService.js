const ApiService = {
  ListAuthors: () => {
    return fetch('http://localhost:8000/api/autor')
      .then(res => res.json());
  },
  CreateAuthor: author => {
    return fetch('http://localhost:8000/api/autor',{method: 'POST', headers: {'content-type': 'application/json'}, body: author })
      .then(res => res.json());
  },
  ListNames: () => {
    return fetch('http://localhost:8000/api/autor/nome')
      .then(res => res.json());
  }, 
  ListBooks: () => {
    return fetch('http://localhost:8000/api/autor/livro')
      .then(res => res.json());
  }, 
  RemoveAuthor: id  => {
    return fetch(`http://localhost:8000/api/autor/livro/${id}`, {method: 'DELETE', headers: {'content-type': 'application/json'},})
      .then(res => res.json());
  }

}

export default ApiService;