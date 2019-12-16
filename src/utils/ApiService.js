const ApiService = {
  ListAuthors: () => {
    return fetch('http://localhost:8000/api/author')
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());
  },
  CreateAuthor: author => {
    return fetch('http://localhost:8000/api/author',{method: 'POST', headers: {'content-type': 'application/json'}, body: author })
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());
  },
  ListNames: () => {
    return fetch('http://localhost:8000/api/author/name')
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());      
  }, 
  ListBooks: () => {
    return fetch('http://localhost:8000/api/author/')
    .then(res => ApiService.ErrorHandler(res))
    .then(res => res.json());
  }, 
  RemoveAuthor: id  => {
    return fetch(`http://localhost:8000/api/author/${id}`, {method: 'DELETE', headers: {'content-type': 'application/json'},})
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