document.addEventListener('DOMContentLoaded', function () {
    gpsStart(document.querySelector(".gps__map-container__cover"),
            document.querySelectorAll(".gps__map-container__map"),
            document.querySelector("#info"),
            document.querySelector('#single-logo'),
            document.querySelector('#double-logo')
            );
    })

function gpsStart(cover, maps, infoMap, singleLogo, doubleLogo){
    var mapSingle = maps[0]
    var mapDouble = maps[1]

    var revealS = function() {
        infoMap.style.display = "none";
        cover.style.opacity = '0.4';
        cover.style.display = "initial";
        setTimeout(function(){
            cover.style.opacity = '1';
            }, 200);
        doubleLogo.classList.remove('current');
        singleLogo.classList.add('current');
        maps.forEach(function(i){
            i.style.display = "none";
        })
        setTimeout(function(){
            mapSingle.style.display = "initial";
            cover.style.display = "none";
            mapSingle.style.opacity = "1";
            }, 500);
    }

    var revealD = function() {
        infoMap.style.display = "none";
        cover.style.opacity = '0.4';
        cover.style.display = "initial";
        setTimeout(function(){
            cover.style.opacity = '1';
            }, 200);
        singleLogo.classList.remove('current');
        doubleLogo.classList.add('current');
        maps.forEach(function(i){
            i.style.display = "none";
        })
        setTimeout(function(){
            mapDouble.style.display = "initial";
            cover.style.display = "none";
            mapDouble.style.opacity = "1";
            }, 500);
    }
    singleLogo.addEventListener('click', revealS);
    doubleLogo.addEventListener('click', revealD);
}