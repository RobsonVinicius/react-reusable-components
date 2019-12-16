import Swal from 'sweetalert2';

const PopUp = {
  displayMessage: (status, msg) => {
    if(status === 'success') {
      Swal.fire({
        title: 'Cadastrado!',
        text: msg,
        type: 'success',        
        timer: 1000
      })
    }
    if(status === 'error'){
      Swal.fire({
        title: 'Erro!',
        text: msg,
        type: 'error',
        timer: 1500           
      })
    }
    if(status === 'remove') {
      Swal.fire({
        title: 'Removido!',
        text: msg,
        type: 'warning',
        timer: 1500,
        confirmButtonText: 'Ok'        
      })
    }
  }
}

export default PopUp;
