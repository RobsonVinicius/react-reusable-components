const ApiService = {
  ListAuthors: () => {
    return fetch('https://react-cadastro-livros.herokuapp.com/api/author')
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());
  },
  CreateAuthor: author => {
    return fetch('https://react-cadastro-livros.herokuapp.com/api/author',{method: 'POST', headers: {'content-type': 'application/json'}, body: author })
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());
  },
  ListNames: () => {
    return fetch('https://react-cadastro-livros.herokuapp.com/api/author/name')
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());      
  }, 
  ListBooks: () => {
    return fetch('https://react-cadastro-livros.herokuapp.com/api/author/')
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());
  }, 
  RemoveAuthor: id  => {
    return fetch(`https://react-cadastro-livros.herokuapp.com/api/author/${id}`, {method: 'DELETE', headers: {'content-type': 'application/json'},})
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());  
  },
  ErrorHandler: res => {
    if(!res.ok) {
      throw Error(res.responseText);      
    }
    return res;
  }

}

export default ApiService;