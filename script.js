function clickMenu() {
    let iniciar = document.getElementById("menuIniciar")
    let menuOculto = document.getElementById("menu")
    let fechar = document.getElementById("menuFechar")
   
    if (menuOculto.style.display == 'none') {
        menuOculto.style.display = 'block'
    } else {
      menuOculto.style.display = 'none'
    }
    
  }
