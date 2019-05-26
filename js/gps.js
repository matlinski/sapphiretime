document.addEventListener('DOMContentLoaded', function () {
    gpsStart();
    })

function gpsStart(){
    var cover = document.querySelector(".gps__map-container__cover");
    var maps = document.querySelectorAll(".gps__map-container__map");
    var mapSingle = maps[0]
    var mapDouble = maps[1]

    var revealS = function() {
        cover.style.display = "initial";
        cover.style.opacity = "1";
        doubleLogo.classList.remove('current');
        singleLogo.classList.add('current');
        maps.forEach(function(i){
            i.style.display = "none";
        })
        setTimeout(function(){
            mapSingle.style.display = "initial";
            cover.style.display = "none";
            mapSingle.style.opacity = "1";
            }, 250);
    }

    var revealD = function() {
        cover.style.display = "initial";
        singleLogo.classList.remove('current');
        doubleLogo.classList.add('current');
        maps.forEach(function(i){
            i.style.display = "none";
        })
        setTimeout(function(){
            mapDouble.style.display = "initial";
            cover.style.display = "none";
            mapDouble.style.opacity = "1";
            }, 250);
    }
    var singleLogo = document.querySelector('#single-logo');
    var doubleLogo = document.querySelector('#double-logo');
    singleLogo.addEventListener('click', revealS);
    doubleLogo.addEventListener('click', revealD);
}