$(function(){
    $('#welcome').click(function(){
        $('nav').slideToggle();
    });
});


var lista_imagens = [];

Array("img1.jpg","img2.jpg","img3.jpg");

lista_imagens[0] = 'img1.jpg' ;
lista_imagens[1] = 'img2.jpg' ;
lista_imagens[2] = 'img3.jpg' ;


var i =0 ;


function proxima_direita(){
    document.getElementById("imagem").src = lista_imagens[i];
    if(i+1 == 3){
        i = 0;
    }
    else{
        i=i+1
    }
}

function proxima_esquerda(){
    document.getElementById("imagem").src = lista_imagens[i];
    if(i == 0){
        i = 0;
    }
    else{
        i=i-1;
    }
}

