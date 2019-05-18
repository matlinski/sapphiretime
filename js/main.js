'use strict'

window.onload = start;
function start(){
    const singleLogo = document.querySelector('#single-logo');
    const singleGallery = document.querySelector('.single');
    const singlePhotos = singleGallery.querySelectorAll('img');

    const doubleLogo = document.querySelector('#double-logo');
    const doubleGallery = document.querySelector('.double');
    const doublePhotos = doubleGallery.querySelectorAll('img');

    const revealS = () => singlePhotos.forEach((i)=>{
        doubleGallery.style.display = 'none';
        singleGallery.style.display = 'block';
        i.style.transform = "scale(0.9)";
        i.style.filter = "blur(10px)";
        setTimeout(()=>{
            i.style.transform = "scale(1)";
            i.style.filter = "blur(0)";
        },500)
    })

    const revealD = () => doublePhotos.forEach((i)=>{
        singleGallery.style.display = 'none';
        doubleGallery.style.display = 'block';
        i.style.transform = "scale(0.9)";
        i.style.filter = "blur(10px)";
        setTimeout(()=>{
            i.style.transform = "scale(1)";
            i.style.filter = "blur(0)";
        },500)
    })

    singleLogo.addEventListener('click', revealS);
    doubleLogo.addEventListener('click', revealD);
}