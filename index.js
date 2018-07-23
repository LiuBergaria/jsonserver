slider

classes de css - tables / icones / menu / ativos / animações entrada e saida

funções over page

setar height 100% maximo em conteudos do middle
obs: as vezes é necessário uma div container pra isso
** align-self: flex-start também conserta o problema

https://codepen.io/fixcl/pen/lvCFr // rings animation // app loader
https://codepen.io/Rplus/pen/lEDBj // border animation // app loader

https://ianlunn.github.io/Hover/ // pacote de transições


// Animação abrindo OverPage

@keyframes openingOver {
  from {
    transform: scale(0);
    opacity: 0;
    border-radius: 50%;
  }
  to {
    transform: scale(1);
    opacity: 1;
    border-radius: 0;
  }
}

#over-page {
  background-color: black;
  position: fixed;
  z-index: 1005;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  display: none;
}

#over-page.active {
  display: flex;
  animation: openingOver .25s ease-in-out;
}

#over-page.desactive {
  display: flex;
  animation: openingOver .25s reverse ease-in-out forwards;
}

function abrir() {
  var element = document.getElementById("over-page");
  element.classList.add("active");
}
function fechar() {
  var element = document.getElementById("over-page");
  // O bloco de função dentro do setTimeout só vai ser executado depois do tempo determinado
  // As linhas abaixo dele serão executadas normalmente antes
  setTimeout(()=> {
    element.classList.remove("desactive");
  }, 250);
  element.classList.remove("active");
  void element.offsetWidth;
  element.classList.add("desactive");            
}

// Criar uma segunda animação com delay do tempo da primeira para exibir o conteudo
// Usar um border radius para entrar mais suave a tela
