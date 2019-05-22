/* var title = document.title;
title = "lol"; PHP NEEDED */
"use strict"

//http://ws.geonames.org/countryCode?lat=43.7534932&lng=28.5743187&type=JSON
if(navigator.geolocation) {
    var tracking = navigator.geolocation.watchPosition(onPositionReceived, locationNotReceived, {timeout: 10000});
    //navigator.geolocation.clearWatch(tracking);
}
function onPositionReceived(position){
    console.log(position);
}
function locationNotReceived(positionError){
    console.log(positionError)
}

var indexMenu = document.querySelectorAll(".menu1");
var gpsMenu = document.querySelectorAll(".menu2");
var resMenu = document.querySelectorAll(".menu3");
var contMenu = document.querySelectorAll(".menu4");
var aboutUsTitle = document.querySelector(".about-us__title");
var aboutUsBody = document.querySelectorAll(".about-us__body");
var infoGallery = document.querySelector("#info");
var footerText = document.querySelector(".main-footer__body")
window.onload = start;

function start(){
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response);
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
    infoGallery.innerHTML = "hahaha";
    footerText.innerHTML = "hmm";
}