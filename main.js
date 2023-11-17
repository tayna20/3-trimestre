function tocaSom (selectorElemento) {

    const elemento = document.querySelector(selectorElemento);

   if (elemento && elemento.localName === 'audio') {
        elemento.play();
   }
else {
    //alert('Elemento ou seletor não encontrado');
    console.log('Elemento ou seletor não encontrado!')
}

}    

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template strin
    
    tecla.onclick = function () {
        tocaSom(idAudio);{
    }
   
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeup = function () {
        tecla.classList.remove('ativa');
    } 
} 


}