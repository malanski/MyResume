const imagemPrincipal = document.querySelector('.imagem-principal');

imagemPrincipal.onclick = function() {
    let imgSrc = imagemPrincipal.getAttribute('src');
    if(imgSrc === 'retrato-pontilhismo.png') {
        imagemPrincipal.setAttribute('src', 'retrato-pontilhismo2.png')
    } else {
        imagemPrincipal.setAttribute('src', 'retrato-pontilhismo.png');
    }
}