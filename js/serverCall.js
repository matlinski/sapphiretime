
'use strict'

document.addEventListener('DOMContentLoaded', function () {
    serverStart();
})

function serverStart() {
    var flags = document.querySelectorAll('.flag');
    var PL = flags[0];
    var UK = flags[1];
    PL.addEventListener('click', chooseLang);
    UK.addEventListener('click', chooseLang);

    if (typeof localStorage.getItem('gps') === 'string' || localStorage.getItem('gps') instanceof String) {
        if (localStorage.getItem('gps') !== 'PL') localStorage.setItem('gps', 'UK');
        fetch('../json/' + localStorage.getItem('gps') + '.json').then(function (response) {
            return response.json();
        })
            .then(function (set) {
                return set;
            })
            .then(function (set) {
                langChange(set);
            })
        return;
    }
    else {
        fetch('https://trgwii-geoip-server.glitch.me/')
            .then(function (response) {
                return response.json();
            })
            .then(function (geo) {
                return geo.country;
            })
            .then(function (country) {
                localStorage.setItem('gps', country);
                if (country !== 'PL') country = 'UK';
                fetch('../json/' + country + '.json')
                    .then(function (response) {
                        console.log(response);
                        return response.json();
                    })
                    .then(function (set) {
                        return set;
                    })
                    .then(function (set) {
                        langChange(set);
                    })
            })
    }
}

function langChange(init) {
    var flags = document.querySelectorAll('.flag');
    var indexMenu = document.querySelectorAll('.menu1');
    var gpsMenu = document.querySelectorAll('.menu2');
    var resMenu = document.querySelectorAll('.menu3');
    var contMenu = document.querySelectorAll('.menu4');
    var aboutUsTitle = document.querySelector('.about-us__title');
    var aboutUsBody = document.querySelector('.about-us__body');
    var infoGallery = document.querySelector('#info');
    var footerText = document.querySelector('.main-footer__body');
    var singleGallery = document.querySelector('.single');
    var doubleGallery = document.querySelector('.double');
    var singlePhotos = singleGallery.querySelectorAll('img');
    var doublePhotos = doubleGallery.querySelectorAll('img');
    var mainLogo = document.querySelector('.main-header__frame__logo');
    var serviceLogo = document.querySelector('.single-alt');
    var serviceLogoDouble = document.querySelector('.double-alt');
    (localStorage.getItem('gps') === 'PL') ? flags[0].classList.add('current') : flags[1].classList.add('current');
    document.title = init.title;
    mainLogo.alt = init.mainLogo;
    serviceLogo.alt = init.serviceLogo;
    serviceLogoDouble.alt = init.serviceLogoDouble;
    singlePhotos.forEach(function (i) {
        i.alt = init.singlePhotos;
    });
    doublePhotos.forEach(function (i) {
        i.alt = init.doublePhotos;
    });
    for (var i = 0; i < indexMenu.length; i++) {
        indexMenu[i].innerHTML = init.indexMenu;
        gpsMenu[i].innerHTML = init.gpsMenu;
        resMenu[i].innerHTML = init.resMenu;
        contMenu[i].innerHTML = init.contMenu;
    }
    aboutUsTitle.innerHTML = init.aboutUsTitle;
    aboutUsBody.innerHTML = init.aboutUsBody;
    infoGallery.innerHTML = init.infoGallery;
    footerText.innerHTML = init.footerText;
}

function chooseLang(e) {
    var flags = document.querySelectorAll('.flag');
    localStorage.clear();
    localStorage.setItem('gps', e.target.alt);
    flags.forEach(function (i) {
        i.classList.remove('current');
    })
    fetch('../json/' + localStorage.getItem('gps') + '.json').then(function (response) {
        return response.json();
    })
        .then(function (set) {
            return set;
        })
        .then(function (set) {
            langChange(set);
        })
}
