document.addEventListener('DOMContentLoaded', function () {
    gpsStart(document.querySelector(".gps__map-container__cover"),
            document.querySelector("#info"),
            document.querySelector('#single-logo'),
            document.querySelector('#double-logo'),
            document.querySelector('.gps__map-container')
            );
    })

function gpsStart(cover, infoMap, singleLogo, doubleLogo, coverDiv){

    var mapSLoaded = false;
    var mapDLoaded = false;

    var revealS = function(e) {
        e.preventDefault()
        infoMap.style.display = "none";
        if(!mapSLoaded){
            coverDiv.innerHTML += '<iframe class="gps__map-container__map map-single" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7079.621650760226!2d19.431609981749283!3d51.79794370786818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bca903e63f943%3A0xc41c3844423b33ca!2sApartament+Sapphire+Time!5e1!3m2!1spl!2ses!4v1558770961811!5m2!1spl!2ses" width="100%" height="450" frameborder="0" style=" border:0; z-index: 99; " allowfullscreen></iframe>'
            mapSLoaded = true;
        }
        var maps = document.querySelectorAll(".gps__map-container__map");
        var mapSingle = document.querySelector(".map-single")
        mapSingle.style.display = "none"
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

    var revealD = function(e) {
        e.preventDefault()
        infoMap.style.display = "none";
        if(!mapDLoaded){
            coverDiv.innerHTML += '<iframe class="gps__map-container__map map-double" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7092.039225652966!2d19.426581112006417!3d51.796632065268525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bca96d54a2901%3A0x739b0adb38a124c!2sDouble+Sapphire+Time!5e1!3m2!1spl!2ses!4v1558770911998!5m2!1spl!2ses" width="90%" height="450" frameborder="0" style=" border:0; z-index: 99;" allowfullscreen></iframe>'
            mapDLoaded = true;
        }
        var maps = document.querySelectorAll(".gps__map-container__map");
        console.log(maps)
        var mapDouble = document.querySelector(".map-double")
        mapDouble.style.display = "none"
        infoMap.style.display = "none";
        setTimeout(function(){
            cover.style.opacity = '1';
            }, 200);
        singleLogo.classList.remove('current');
        doubleLogo.classList.add('current');
        maps.forEach(function(i){
            i.style.display = "none";
        })
        setTimeout(function(){
            mapDouble.style.display = "block";
            cover.style.display = "none";
            mapDouble.style.opacity = "1";
            }, 500);
    }
    singleLogo.addEventListener('click', revealS);
    doubleLogo.addEventListener('click', revealD);
}