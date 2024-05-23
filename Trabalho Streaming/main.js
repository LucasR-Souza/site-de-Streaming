//Redirecinamento dos botoes dos planos
const botoesPlano = document.getElementsByClassName('redirecionar_registro');

for(let i = 0; i < botoesPlano.length; i++){
    botoesPlano[i].addEventListener('click', function(){
        window.location.href = "./src/registro.html"
    });
};

//Esconder e exibir elementos do nav

function VerificarTamanhoDaTela(){
    if(window.matchMedia('(max-width: 780px)').matches){
        esconderNav();
    }else{
        mostrarNav();
    }
}

function esconderNav(){
    document.getElementsByClassName('nav_alterar')[0].classList.add('hidden')
    document.getElementsByClassName('nav_alterar')[1].classList.add('hidden')
    document.getElementsByClassName('nav_registro')[0].classList.remove('hidden')
}
function mostrarNav(){
    document.getElementsByClassName('nav_alterar')[0].classList.remove('hidden')
    document.getElementsByClassName('nav_alterar')[1].classList.remove('hidden')
    document.getElementsByClassName('nav_registro')[0].classList.add('hidden')
}

VerificarTamanhoDaTela();

window.addEventListener('resize', VerificarTamanhoDaTela);