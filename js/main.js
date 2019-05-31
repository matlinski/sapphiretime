'use strict'

function mainStart(singleLogo,
                   singleGallery,
                   singleFrames,
                   singlePhotos,
                   doubleLogo,
                   doubleGallery,
                   doubleFrames,
                   doublePhotos
                   ){
    var prevent = function(e) {
        e.preventDefault()
    }
    function reset(){
        for(var i = 0; i < singleFrames.length; i++){
            singleFrames[i].addEventListener('click', prevent);
            singleFrames[i].style.cursor = 'not-allowed';
        }
    }
    reset()
    function resetRemove(){
        for(var i = 0; i < singleFrames.length; i++){
            singlePhotos[i].style.cursor = 'pointer';
            doublePhotos[i].style.cursor = 'pointer';
            singleFrames[i].style.cursor = 'pointer';
            singleFrames[i].setAttribute('data-lightbox', 'mygallery');
            singleFrames[i].removeEventListener('click', prevent);
        }
    }
    var revealS = function() {
        resetRemove()
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
        resetRemove()
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
              document.querySelectorAll('.single2>a'),
              document.querySelectorAll('.single2>a>img'),
              document.querySelector('#double-logo'),
              document.querySelector('.double2'),
              document.querySelectorAll('.double2>a'),
              document.querySelectorAll('.double2>a>img')
              );
})