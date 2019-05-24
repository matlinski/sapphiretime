'use strict'
document.addEventListener('DOMContentLoaded', function () {
    
    
    
    
    
    
    
    
    singleLogo.addEventListener('click', revealS);
    doubleLogo.addEventListener('click', revealD);
    start(singleLogo, singleFrames, singlePhotos, doubleLogo, doubleFrames, doublePhotos);
})
start(document.querySelector('#single-logo'), document.querySelector('.single'), singleGallery.querySelectorAll('a'), singleGallery.querySelectorAll('img'), document.querySelector('#double-logo'), document.querySelector('.double'), doubleGallery.querySelectorAll('a'), doubleGallery.querySelectorAll('img')){
    var prevent = function(e) {
        e.preventDefault()
    }
    function reset(){
        for(var i = 0; i < singleFrames.length; i++){
            singleFrames[i].addEventListener("click", prevent);
            singleFrames[i].style.cursor = "not-allowed";
        }
    }
    function resetRemove(){
        for(var i = 0; i < singleFrames.length; i++){
            singlePhotos[i].style.cursor = "pointer";
            doublePhotos[i].style.cursor = "pointer";
            singleFrames[i].style.cursor = "pointer";
            singleFrames[i].setAttribute("data-lightbox", "mygallery");
            singleFrames[i].removeEventListener("click", prevent);
        }
    }
    reset()
    var revealS = function() {
        resetRemove()
        doubleLogo.style.backgroundColor = "rgba(22%, 28%, 42%, 0.7)";
        singleLogo.style.backgroundColor = "rgba(2%, 8%, 22%, .75)";
        for(var i = 0; i < singlePhotos.length; i++){
            if (doubleGallery.style.display !== 'none') {
                doubleGallery.style.display = 'none';
                singleGallery.style.display = 'block';
            }
            
            (singlePhotos[i].style.transform !== "scale(0.9)") ? singlePhotos[i].style.transform = "scale(0.9)" : console.log(singlePhotos[i]);
            (singlePhotos[i].style.filter !== "blur(10px)") ? singlePhotos[i].style.filter = "blur(10px)" : console.log(singlePhotos[i]);
            (singleFrames[i].style.opacity !== "0.4") ? singleFrames[i].style.opacity = "0.4" : console.log(singleFrames[i]);
        }
        setTimeout(function(){
        for(var i = 0; i < singlePhotos.length; i++){
            singlePhotos[i].style.transform = "scale(1)";
            singlePhotos[i].style.filter = "blur(0)";
            singleFrames[i].style.opacity = "0.85";
        }
        }, 250)
    }

        var revealD = function() {
            resetRemove()
            singleLogo.style.backgroundColor = "rgba(22%, 28%, 42%, 0.7)";
            doubleLogo.style.backgroundColor = "rgba(2%, 8%, 22%, .75)";
            for(var i = 0; i < doublePhotos.length; i++){
                if (singleGallery.style.display !== 'none') {
                    singleGallery.style.display = 'none';
                    doubleGallery.style.display = 'block';
                }
                (doublePhotos[i].style.transform !== "scale(0.9)") ? doublePhotos[i].style.transform = "scale(0.9)" : console.log(doublePhotos[i]);
                (doublePhotos[i].style.filter !== "blur(10px)") ? doublePhotos[i].style.filter = "blur(10px)" : console.log(doublePhotos[i]);
                (doubleFrames[i].style.opacity !== "0.4") ? doubleFrames[i].style.opacity = "0.4" : console.log(doubleFrames[i]);
        }
            setTimeout(function(){
            for(var i = 0; i < doublePhotos.length; i++){
                doublePhotos[i].style.transform = "scale(1)";
                doublePhotos[i].style.filter = "blur(0)";
                doubleFrames[i].style.opacity = "0.85";
            }
            }, 250)
        } 
}
   