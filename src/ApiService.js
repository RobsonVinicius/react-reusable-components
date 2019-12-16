const ApiService = {
  ListAuthors: () => {
    return fetch('http://localhost:8000/api/author');
  },
  CreateAuthor: author => {
    return fetch('http://localhost:8000/api/author',{method: 'POST', headers: {'content-type': 'application/json'}, body: author });
  },
  ListNames: () => {
    return fetch('http://localhost:8000/api/author/name');      
  }, 
  ListBooks: () => {
    return fetch('http://localhost:8000/api/author/');      
  }, 
  RemoveAuthor: id  => {
    return fetch(`http://localhost:8000/api/author/${id}`, {method: 'DELETE', headers: {'content-type': 'application/json'},});      
  },
  ErrorHandler: res => {
    if(!res.ok) {
      throw Error(res.responseText);      
    }
    return res.json();
  }

}

export default ApiService;