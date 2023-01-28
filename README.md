# Frontend Mentor - solução de página inicial de notícias

Esta é uma solução para o [desafio da página inicial de notícias no Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

![](./assets/images/desktop.gif)

## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)
- [Agradecimentos](#acknowledgments)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- O layout para a interface, dependendo do tamanho da tela do dispositivo.
- Os estados de foco e foco para todos os elementos interativos na página.

### Captura de tela

![](./assets/images/mobile%20(1).gif)
![](./assets/images/mobile%20(4).png)
![](./assets/images/mobile%20(3).png)

<!-- ### Links

- URL da solução: [Adicionar URL da solução aqui](https://your-solution-url.com)
- URL do site ao vivo: [Adicione URL do site ao vivo aqui](https://your-live-site-url.com) -->

## Meu processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- Flexbox
- Grid CSS
- Fluxo de trabalho móvel primeiro
- Javascript para dinamicidade no menu

### O que eu aprendi

Usar Grid foi um pouco desafiado pra mim desta vez, mas vou pegar o jeito. A utilização de JavaScript foi algo que gostei bastante e pretendo apefeiçoar.

```css
 .container{
        display: grid;
        flex-direction: row;
        align-items: center;
        grid-template-areas: "a1 a1 a1"
                             "a2 a2 a3"
                             "a2 a2 a3"
                             "a4 a4 a4"
        ;
        gap: 2rem;
        
    }
```
```js
function abreMenu() {

      let abre = document.getElementById("oculto")
      abre.style.width = `15rem`
      abre.style.transitionDuration = `500ms`
    
  }
  function fechaMenu() {

      let fecha = document.getElementById("oculto")
      fecha.style.width = `0rem`
    
  }
```

### Desenvolvimento contínuo

A lingugem em si de programação é algo que quero praticar mais e ganhar abilidade necessária para aprender outras techs que complementem-na.

## Autor

- Website - [Hudney Brito](https://hudney-fsbrito.github.io/Hudney-Brito-Portfolio-/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Agradecimentos

É sempre uma gratidão ter plataformas como o Frontend Mentor com pessoas dispostas a deixar seus conhecimentos para ajudar quem está querendo entrar nessa área. Agradeço também às figuras que tenho como inspiração.