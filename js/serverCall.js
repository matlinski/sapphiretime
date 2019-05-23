/* var title = document.title;
title = "lol"; PHP NEEDED */
"use strict"

/*if(navigator.geolocation) {
    var tracking = navigator.geolocation.watchPosition(onPositionReceived, locationNotReceived, {timeout: 10000});
    //navigator.geolocation.clearWatch(tracking);
}
function onPositionReceived(position){
    console.log(position);
}
function locationNotReceived(positionError){
    console.log(positionError)
}
    ? access_key = ;*/
var indexMenu = document.querySelectorAll(".menu1");
var gpsMenu = document.querySelectorAll(".menu2");
var resMenu = document.querySelectorAll(".menu3");
var contMenu = document.querySelectorAll(".menu4");
var aboutUsTitle = document.querySelector(".about-us__title");
var aboutUsBody = document.querySelectorAll(".about-us__body");
var infoGallery = document.querySelector("#info");
var footerText = document.querySelector(".main-footer__body");
var flags = document.querySelectorAll(".flag");
var singleGallery = document.querySelector('.single');
var doubleGallery = document.querySelector('.double');
var mainLogo = document.querySelector(".main-header__frame__logo")
var serviceLogo = document.querySelector(".single-alt")
var serviceLogoDouble = document.querySelector(".double-alt")
var singlePhotos = singleGallery.querySelectorAll('img')
var doublePhotos = doubleGallery.querySelectorAll('img')
var PL = flags[0];
var UK = flags[1];
var chooseLang = function(e){
    localStorage.clear();
    localStorage.setItem('gps', e.target.alt);
    flags.forEach(function(i){
        i.classList.remove('current')
    })
    langChange();
}

document.addEventListener('DOMContentLoaded', function(){
    start() 
})

var langChange = function(){
    (localStorage.getItem("gps") === "PL") ?flags[0].classList.add('current') :flags[1].classList.add('current');
    if(localStorage.getItem("gps") === "PL"){
        document.title = "Witaj na stronie Sapphire Time";
        mainLogo.alt = "Logo Sapphire Time";
        serviceLogo.alt = "Logo Sapphire Time";
        serviceLogoDouble.alt = "Logo Double Sapphire Time";
        singlePhotos.forEach(function(i){
            i.alt = "Zdjęcie z apartamentu Sapphire Time";
        });
        doublePhotos.forEach(function(i){
            i.alt = "Zdjęcie z apartamentu Double Sapphire Time";
        });
        for(var i = 0; i < indexMenu.length; i++){
            indexMenu[i].innerHTML = "STRONA GŁÓWNA";
            gpsMenu[i].innerHTML = "LOKALIZACJA";
            resMenu[i].innerHTML = "REZERWACJA";
            contMenu[i].innerHTML = "KONTAKT";
        }
        aboutUsTitle.innerHTML = "Najlepsze apar&shy;tamenty w mieście!";
        for(var i = 0; i < aboutUsBody.length; i++){
            aboutUsBody[i].innerHTML = 'Na&shy;sze komfortowe apartamenty znajdują się w niez&shy;wyk&shy;łej, zie&shy;lo&shy;nej okolicy Bałut. W pobliżu są: ma&shy;low&shy;ni&shy;czy park i zielone skwery. Miejsce to jest bardzo dob&shy;rze skomu&shy;nikowane z centrum Łodzi. Blisko znaj&shy;duje się Wo&shy;je&shy;wódz&shy;ki Specjalistyczny Szpital im. dr. Wł. Bie&shy;gań&shy;skie&shy;go i Instytut Medycyny Pracy imienia prof. dra med. Jerzego Nofera. Bardzo blisko są skle&shy;py spo&shy;żyw&shy;cze, i pizzeria PRESTO. Zapraszamy!'
        }
        infoGallery.innerHTML = "Możesz zobaczyć galerię zdjęć z naszego apartamentu klikając na jeden z logotypów powyżej.";
        footerText.innerHTML = "Wszelkie prawa zastrzeżone © 2019 autor witryny Mateusz Matliński.";
    }
    else if(localStorage.getItem("gps") !== "PL"){
        document.title = "Welcome to the Sapphire Time website";
        mainLogo.alt = "Sapphire Time logo";
        serviceLogo.alt = "Sapphire Time logo";
        serviceLogoDouble.alt = "Double Sapphire Time logo";
        singlePhotos.forEach(function(i){
            i.alt = "Photo from the Sapphire Time apartment";
        });
        doublePhotos.forEach(function(i){
            i.alt = "Photo from the Double Sapphire Time apartment";
        });
        for(var i = 0; i < indexMenu.length; i++){
            indexMenu[i].innerHTML = "HOME";
            gpsMenu[i].innerHTML = "LOCATION";
            resMenu[i].innerHTML = "RESERVATION";
            contMenu[i].innerHTML = "CONTACT";
        }
        aboutUsTitle.innerHTML = "The best apart&shy;ments in the city!";
        for(var i = 0; i < aboutUsBody.length; i++){
            aboutUsBody[i].innerHTML = 'Our com&shy;for&shy;ta&shy;ble apart&shy;ments are lo&shy;ca&shy;ted in the unique, green surround&shy;ings of Bałuty. Near&shy;by are: a pic&shy;tur&shy;esque park and green squares. This place is very well commu&shy;nica&shy;ted with the cen&shy;ter of Lodz. It is close to the Pro&shy;vincial Spe&shy;cia&shy;list Hos&shy;pital. dr. On. Biegański and the Insti&shy;tute of Occupa&shy;tional Medi&shy;cine, name of prof. Dr. med. Jerzy Nofer. The gro&shy;cery stores and the pizze&shy;ria PRESTO are ve&shy;ry close. Welcome!'
        }
        infoGallery.innerHTML = "You can see a photo gallery from any of our apartments by clicking on one of the logos above.";
        footerText.innerHTML = "All rights reserved. © 2019 website author Mateusz Matliński.";
    }
}

function start(){

    PL.addEventListener("click", chooseLang);
    UK.addEventListener("click", chooseLang);

    if(typeof localStorage.getItem("gps") === 'string' || localStorage.getItem("gps") instanceof String){
        langChange();
        console.log(localStorage.getItem("gps"));
        return;
    }
    else{
        fetch('https://trgwii-geoip-server.glitch.me/')
        .then(function(response){
            return response.json();
        })
        .then(function(geo){
            return geo.country})
        .then(function(country){
            localStorage.setItem('gps', country);
        })
        .then(langChange);
    }
}