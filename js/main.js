'use strict'
    var currentTab = document.querySelector('#current-tab')
    var singleLogo = document.querySelector('#single-logo');
    var singleGallery = document.querySelector('.single');
    var singlePhotos = singleGallery.querySelectorAll('img');
    var doubleLogo = document.querySelector('#double-logo');
    var doubleGallery = document.querySelector('.double');
    var doublePhotos = doubleGallery.querySelectorAll('img')
    var revealS = function() {
        for(var i = 0; i < singlePhotos.length; i++){
            if (doubleGallery.style.display !== 'none') {
                doubleGallery.style.display = 'none';
                singleGallery.style.display = 'block';
            }
        (singlePhotos[i].style.transform !== "scale(0.9)") ? singlePhotos[i].style.transform = "scale(0.9)" : console.log(singlePhotos[i]);
        (singlePhotos[i].style.filter !== "blur(10px)") ? singlePhotos[i].style.filter = "blur(10px)" : console.log(singlePhotos[i]);
        (singlePhotos[i].style.opacity !== "0.4") ? singlePhotos[i].style.opacity = "0.4" : console.log(singlePhotos[i]);
        }
        setTimeout(function(){
        for(var i = 0; i < singlePhotos.length; i++){
            singlePhotos[i].style.transform = "scale(1)";
            singlePhotos[i].style.filter = "blur(0)";
            singlePhotos[i].style.opacity = "1";
        }
        }, 250)
    }

        var revealD = function() {
            for(var i = 0; i < doublePhotos.length; i++){
                if (singleGallery.style.display !== 'none') {
                    singleGallery.style.display = 'none';
                    doubleGallery.style.display = 'block';
                }
            (doublePhotos[i].style.transform !== "scale(0.9)") ? doublePhotos[i].style.transform = "scale(0.9)" : console.log(doublePhotos[i]);
            (doublePhotos[i].style.filter !== "blur(10px)") ? doublePhotos[i].style.filter = "blur(10px)" : console.log(doublePhotos[i]);
            (doublePhotos[i].style.opacity !== "0.4") ? doublePhotos[i].style.opacity = "0.4" : console.log(doublePhotos[i]);
        }
            setTimeout(function(){
            for(var i = 0; i < doublePhotos.length; i++){
                doublePhotos[i].style.transform = "scale(1)";
                doublePhotos[i].style.filter = "blur(0)";
                doublePhotos[i].style.opacity = "1";
            }
            }, 250)
        }

        singleLogo.addEventListener('click', revealS);
        doubleLogo.addEventListener('click', revealD);
        
        
        singleLogo.addEventListener('keypress', function(e){
            var key = e.which || e.keyCode;
            if (key === 13) {
                revealS()
              }
        });

        doubleLogo.addEventListener('keypress', function(e){
            var key = e.which || e.keyCode;
            if (key === 13) {
                revealD()
              }
        });