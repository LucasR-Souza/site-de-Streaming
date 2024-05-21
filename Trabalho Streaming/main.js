//carrossel de imagens

const imagem1 = document.getElementById('imagem_1');
const imagem2 = document.getElementById(imagem_2)
const imagem3 = document.getElementById(imagem_3)

imagem1.src = "./Imagem/background1.png"
console.log


//Redirecinamento dos botoes dos planos
const botoesPlano = document.getElementsByClassName('plano_botao');

for(let i = 0; i < botoesPlano.length; i++){
    botoesPlano[i].addEventListener('click', function(){
        window.location.href = "./src/registro.html"
    });
};