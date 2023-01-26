/* function clickMenu() {
    let iniciar = document.getElementById("menuAbrir")
    let menuOculto = document.getElementById("menu")
    let fechar = document.getElementById("menuFechar")
   
    if (menuOculto.style.display == 'none') {
        menuOculto.style.display = 'block'
    } else {
      menuOculto.style.display = 'none'
    }
    
  } */
  function abreMenu() {

      let abre = document.getElementById("oculto")
      abre.style.width = `15rem`
      abre.style.transitionDuration = `500ms`
    
  }
  function fechaMenu() {

      let fecha = document.getElementById("oculto")
      fecha.style.width = `0rem`
    
  }
