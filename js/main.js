'use strict'

function mainStart(singleLogo,
                   singleGallery,
                   doubleLogo,
                   doubleGallery
                   ){
    var singleLoaded = false;
    var doubleLoaded = false;
    var photoNum = 15;
    var prevent = function(e) {
        e.preventDefault()
    }
    var revealS = function() {
        if(!singleLoaded){
            for(var i = 1; i <= photoNum; i++){
                singleGallery.innerHTML += `<a href="res/img/single/`+i+`.jpg" data-lightbox="mygallery2" class="main-gallery__frame">
                <img width="100%" src="res/img/single/`+i+`.jpg" alt="Zdjęcie z apartamentu Sapphire Time"
                    class="main-gallery__frame__thumbnail">
            </a>`
            }
            singleLoaded = true;
        }
        var singleFrames = singleGallery.querySelectorAll('a')
        var singlePhotos = singleGallery.querySelectorAll('a>img')
        doubleLogo.classList.remove('current');
        singleLogo.classList.add('current');
        
        doubleGallery.style.display = 'none';
        singleGallery.style.display = 'block';
        for(var i = 0; i < singlePhotos.length; i++){
            
            (singlePhotos[i].style.transform !== 'scale(0.9)') ? singlePhotos[i].style.transform = 'scale(0.9)' : console.log(singlePhotos[i]);
            (singlePhotos[i].style.filter !== 'blur(10px)') ? singlePhotos[i].style.filter = 'blur(10px)' : console.log(singlePhotos[i]);
            (singleFrames[i].style.opacity !== '0.4') ? singleFrames[i].style.opacity = '0.4' : console.log(singleFrames[i]);
        }
        setTimeout(function(){
        for(var i = 0; i < singlePhotos.length; i++){
            singlePhotos[i].style.transform = 'scale(1)';
            singlePhotos[i].style.filter = 'blur(0)';
            singleFrames[i].style.opacity = '0.85';
        }
        }, 250)
    }
    var revealD = function() {
        if(!doubleLoaded){
            for(var i = 1; i <= photoNum; i++){
                doubleGallery.innerHTML += `<a href="res/img/double/`+i+`.jpg" data-lightbox="mygallery2" class="main-gallery__frame">
                <img width="100%" src="res/img/double/`+i+`.jpg" alt="Zdjęcie z apartamentu Double Sapphire Time"
                    class="main-gallery__frame__thumbnail">
            </a>`
            }
            doubleLoaded = true;
        }
        var doubleFrames = doubleGallery.querySelectorAll('a');
        var doublePhotos = doubleGallery.querySelectorAll('a>img');

        singleLogo.classList.remove('current');
        doubleLogo.classList.add('current');
        singleGallery.style.display = 'none';
        doubleGallery.style.display = 'block';
        for(var i = 0; i < doublePhotos.length; i++){
            (doublePhotos[i].style.transform !== 'scale(0.9)') ? doublePhotos[i].style.transform = 'scale(0.9)' : console.log(doublePhotos[i]);
            (doublePhotos[i].style.filter !== 'blur(10px)') ? doublePhotos[i].style.filter = 'blur(10px)' : console.log(doublePhotos[i]);
            (doubleFrames[i].style.opacity !== '0.4') ? doubleFrames[i].style.opacity = '0.4' : console.log(doubleFrames[i]);
    }
        setTimeout(function(){
        for(var i = 0; i < doublePhotos.length; i++){
            doublePhotos[i].style.transform = 'scale(1)';
            doublePhotos[i].style.filter = 'blur(0)';
            doubleFrames[i].style.opacity = '0.85';
        }
        }, 250);

        
    }
    singleLogo.addEventListener('click', revealS);
    doubleLogo.addEventListener('click', revealD);
}

document.addEventListener('DOMContentLoaded', function() {
    mainStart(document.querySelector('#single-logo'),
              document.querySelector('.single2'),
              document.querySelector('#double-logo'),
              document.querySelector('.double2')
              );
})