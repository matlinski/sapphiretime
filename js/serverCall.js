
'use strict'

document.addEventListener('DOMContentLoaded', function () {
serverStart(document.querySelectorAll('.menu1'), document.querySelectorAll('.menu2'), document.querySelectorAll('.menu3'), document.querySelectorAll('.menu4'), document.querySelector('.about-us__title'), document.querySelector('.about-us__body'), document.querySelector('#info'), document.querySelector('.main-footer__body'), document.querySelectorAll('.single>a>img'), document.querySelectorAll('.double>a>img'),  document.querySelector('.main-header__frame__logo'), document.querySelector('.single-alt'), document.querySelector('.double-alt'), document.querySelectorAll('.flag'));
})

function serverStart(indexMenu, gpsMenu, resMenu, contMenu, aboutUsTitle, aboutUsBody, infoGallery, footerText, singlePhotos, doublePhotos, mainLogo, serviceLogo, serviceLogoDouble, flags) {

    function isInPage(node) {
        return (node === document.body) ? false : document.body.contains(node);
      }
    flags[0].addEventListener('click', chooseLang);
    flags[1].addEventListener('click', chooseLang);

    if (typeof localStorage.getItem('gps') === 'string' || localStorage.getItem('gps') instanceof String) {
        if (localStorage.getItem('gps') !== 'PL') localStorage.setItem('gps', 'UK');
        fetch('./../json/' + localStorage.getItem('gps') + '.json').then(function (response) {
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
                fetch('./../json/' + country + '.json')
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

function langChange(init) {
    (localStorage.getItem('gps') === 'PL') ? flags[0].classList.add('current') : flags[1].classList.add('current');
    document.title = init.title;
    mainLogo.alt = init.mainLogo;
    if(isInPage(serviceLogo))serviceLogo.alt = init.serviceLogo;
    if(isInPage(serviceLogoDouble))serviceLogoDouble.alt = init.serviceLogoDouble;
    singlePhotos.forEach(function (i) {
        if(isInPage(i))i.alt = init.singlePhotos;
    });
    doublePhotos.forEach(function (i) {
        if(isInPage(i))i.alt = init.doublePhotos;
    });
    for (var i = 0; i < indexMenu.length; i++) {
        indexMenu[i].innerHTML = init.indexMenu;
        gpsMenu[i].innerHTML = init.gpsMenu;
        resMenu[i].innerHTML = init.resMenu;
        contMenu[i].innerHTML = init.contMenu;
    }
    if(isInPage(aboutUsTitle))aboutUsTitle.innerHTML = init.aboutUsTitle;
    if(isInPage(aboutUsBody))aboutUsBody.innerHTML = init.aboutUsBody;
    if(isInPage(infoGallery))infoGallery.innerHTML = init.infoGallery;
    footerText.innerHTML = init.footerText;
}

function chooseLang(e) {
    localStorage.clear();
    localStorage.setItem('gps', e.target.alt);
    flags.forEach(function (i) {
        i.classList.remove('current');
    })
    fetch('./../json/' + localStorage.getItem('gps') + '.json').then(function (response) {
        return response.json();
    })
        .then(function (set) {
            return set;
        })
        .then(function (set) {
            langChange(set);
        })
}
}