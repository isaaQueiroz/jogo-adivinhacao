let chances = 10;
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let botao = document.getElementById('enviar');
let tentativas = document.getElementById('tentativa');
tentativas.innerHTML = 'Chances: '+ chances;

console.log(numeroSecreto);
function sorteia_facil(){
    let facil = document.getElementById('txtnumero').value;
    let escrita = document.getElementById('maior_menor');
    let escrita_nova = document.getElementById('ganhou');


    if (facil === "" || isNaN(facil)) {
        escrita.innerHTML = 'Por favor, insira um número válido!';
        return;
    }

    console.log(facil);
    if(facil < numeroSecreto){
        escrita.innerHTML = 'Escolha um numero maior!'
        chances -= 1;
    tentativas.innerHTML = 'Chances: '+ chances;
    }else if(facil > numeroSecreto){
        escrita.innerHTML = 'Escolha um número menor!'
        chances -= 1;
        tentativas.innerHTML = 'Chances: '+ chances;
    }else{
        escrita_nova.innerHTML = 'Parabéns você acertou faltando ' + chances + ' chances !!! O número era = '+ numeroSecreto;
        escrita.innerHTML = '';
        tentativas.innerHTML = 'Chances: '+ chances;
        botao.disabled = true;
        setTimeout(function(){
            window.location.reload()
        }, 2000)
    }

    if (chances == 0) {
        escrita.innerHTML = 'Você perdeu! O número secreto era ' + numeroSecreto;
        botao.disabled = true;
        setTimeout(function(){
            window.location.reload()
        }, 2000)
        
    }
}