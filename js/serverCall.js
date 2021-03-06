
'use strict'

document.addEventListener('DOMContentLoaded', function () {
serverStart(document.querySelectorAll('.menu1'),
            document.querySelectorAll('.menu2'),
            document.querySelectorAll('.menu3'),
            document.querySelectorAll('.menu4'),
            document.querySelector('.index .about-us__title'),
            document.querySelector('.index .about-us__body'),
            document.querySelector('.main-gallery #info'),
            document.querySelector('.gps__map-container>#info'),
            document.querySelector('.main-footer__body'),
            document.querySelectorAll('.single>a>img'),
            document.querySelectorAll('.double>a>img'),
            document.querySelector('.main-header__frame__logo'),
            document.querySelector('.single-alt'),
            document.querySelector('.double-alt'),
            document.querySelectorAll('.flag'),
            document.querySelectorAll('.reviews'),
            document.querySelector('.res.about-us>strong'),
            document.querySelectorAll('.res.about-us__body'),
            document.querySelector('.cookiealert-container'),
            document.querySelector('.res .about-us__body.single .main'),
            document.querySelector('.res .about-us__body.single .secondary'),
            document.querySelector('.res .about-us__body.double .main'),
            document.querySelector('.res .about-us__body.double .secondary'),
            document.querySelector('.res .about-us strong'),
            document.querySelectorAll('.res .btn-lg'),
            document.querySelector('.btn-more'),
            document.querySelector('.our-links__frame.single'),
            document.querySelector('.our-links__frame.double')
            );
setTimeout(function(){
    document.querySelectorAll("ins>iframe").forEach(function(i){
        i.title = "Reviews Booking"
    })
console.log(document.querySelectorAll("ins>iframe"))
},800)
})

function serverStart(indexMenu,
                    gpsMenu,
                    resMenu,
                    contMenu,
                    aboutUsTitle,
                    aboutUsBody,
                    infoGallery,
                    infoMap,
                    footerText,
                    singlePhotos,
                    doublePhotos,
                    mainLogo,
                    serviceLogo,
                    serviceLogoDouble,
                    flags,
                    reviews,
                    aboutUsInfoRes,
                    aboutUsBodyRes,
                    cookieContainer,
                    aboutSingleMain,
                    aboutSingleSecondary,
                    aboutDoubleMain,
                    aboutDoubleSecondary,
                    aboutResInfo,
                    resButton,
                    btnMore,
                    widgetS,
                    widgetD
                    ) {
                        widgetS.innerHTML += '<ins class="bookingaff" data-aid="1792900" data-target_aid="1792900" data-prod="rw" data-width="0" data-height="0" data-show_rw_logo="1" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-hid="1649307" data-lang="'+/*((localStorage.getItem('gps') === "PL") ?"pl" :"en")*/'PL'+'"><!-- Anything inside will go away once widget is loaded. --><a href="//www.booking.com?aid=1792900">Booking.com</a></ins>';
                        widgetD.innerHTML += '<ins class="bookingaff" data-aid="1792901" data-target_aid="1792901" data-prod="rw" data-width="0" data-height="0" data-show_rw_logo="1" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-hid="2310850" data-lang="'+/*((localStorage.getItem('gps') === "PL") ?"pl" :"en")*/'PL'+'"> <!-- Anything inside will go away once widget is loaded. --> <a href="//www.booking.com?aid=1792901">Booking.com</a> </ins>';
    function isInPage(node) {
        return (node === document.body) ? false : document.body.contains(node);
      }

    flags[0].addEventListener('click', chooseLang);
    flags[1].addEventListener('click', chooseLang);

    /*if (typeof localStorage.getItem('gps') === 'string' || localStorage.getItem('gps') instanceof String) {
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
                        return response.json();
                    })
                    .then(function (set) {
                        return set;
                    })
                    .then(function (set) {
                        langChange(set);
                    })
            })
    }*/
fetch('../json/PL.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (set) {
            return set;
        })
        .then(function (set) {
            langChange(set);
        })
function langChange(init) {
    var boldCookie = cookieContainer.querySelector('b');
    var mainCookie = cookieContainer.querySelector('span');
    var linkCookie = cookieContainer.querySelector('a');
    var buttonCookie = cookieContainer.querySelector('button');
    /*(localStorage.getItem('gps') === 'PL') ? flags[0].classList.add('current') : flags[1].classList.add('current')*/flags[0].classList.add('current');
    document.title = init.title;
    document.lang = /*(localStorage.getItem('gps') === 'PL') ?*/"pl"/* :"en"*/;
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
    if(isInPage(infoMap))infoMap.innerHTML = init.infoMap;
    footerText.innerHTML = init.footerText;
    boldCookie.innerHTML = init.boldCookie;
    mainCookie.innerHTML = init.mainCookie;
    linkCookie.innerHTML = init.linkCookie;
    linkCookie.href = init.hrefCookie;
    buttonCookie.innerHTML = init.buttonCookie;
    if(isInPage(aboutSingleMain))aboutSingleMain.innerHTML = init.aboutSingleMain;
    if(isInPage(aboutSingleSecondary))aboutSingleSecondary.innerHTML = init.aboutSingleSecondary;
    if(isInPage(aboutDoubleMain))aboutDoubleMain.innerHTML = init.aboutDoubleMain;
    if(isInPage(aboutDoubleSecondary))aboutDoubleSecondary.innerHTML = init.aboutDoubleSecondary;
    if(isInPage(aboutResInfo))aboutResInfo.innerHTML = init.aboutResInfo;
    resButton.forEach(function(i){
        if(isInPage(i))i.innerHTML = init.resButton;
    })
    if(isInPage(btnMore)) btnMore.innerHTML = init.btnMore;
}

function chooseLang(e) {
    /*localStorage.clear();
    localStorage.setItem('gps', e.target.alt);*/
    flags.forEach(function (i) {
        i.classList.remove('current');
    })
    reviews.forEach(function(i){
        if(isInPage(i)) i.style.display = 'none';
    });
    aboutUsBodyRes.forEach(function(i){
        if(isInPage(i)) i.style.display = 'none';
    })
    if(isInPage(aboutUsInfoRes)) aboutUsInfoRes.style.display = 'block';
    fetch('../json/' + /*localStorage.getItem('gps')*/ e.target.alt + '.json').then(function (response) {
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
