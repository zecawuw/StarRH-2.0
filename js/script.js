const usuariosRH = [
    {
        login: 'zeca',
        pass: '1111'
    },
    {
        login: 'marlon',
        pass: '4444'
    },

]

const usuariosFuncionarios = [
    {
        login: 'belo',
        pass: '2222'
    },
    {
        login: 'caua',
        pass: '3333'
    },

]

function logar(){
    let login = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let validarRH = false;
    let validarFuncionarios = false;

    for (let i in usuariosRH) {
        if(login == usuariosRH[i].login && senha == usuariosRH[i].pass){
            validarRH = true
            
            break
        }else{
            validarRH = false
            
        }
      }

      for (let i in usuariosFuncionarios) {
        if(login == usuariosFuncionarios[i].login && senha == usuariosFuncionarios[i].pass){
            validarFuncionarios = true
            
            break
        }else{
            validarFuncionarios = false
            
        }
      }
      
      if(validarRH || validarFuncionarios == true){
        location.href = "homeFuncionario.html"
      }else{
        let alert = document.getElementById('alert');

        alert.show
        
      }
    
}
