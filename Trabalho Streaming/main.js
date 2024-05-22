//Redirecinamento dos botoes dos planos
const botoesPlano = document.getElementsByClassName('redirecionar_registro');

for(let i = 0; i < botoesPlano.length; i++){
    botoesPlano[i].addEventListener('click', function(){
        window.location.href = "./src/registro.html"
    });
};