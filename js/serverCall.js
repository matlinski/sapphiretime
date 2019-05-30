
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
            document.querySelectorAll('.flag')
            );
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
                    flags
                    ) {
	document.querySelector('.our-links__frame.single').innerHTML += '<ins class="bookingaff" data-aid="1792900" data-target_aid="1792900" data-prod="rw" data-width="0" data-height="0" data-show_rw_logo="1" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-hid="1649307" data-lang="'+((localStorage.getItem('gps') === "PL") ?"pl" :"en")+'"><!-- Anything inside will go away once widget is loaded. --><a href="//www.booking.com?aid=1792900">Booking.com</a></ins>';
    document.querySelector('.our-links__frame.double').innerHTML += '<ins class="bookingaff" data-aid="1792901" data-target_aid="1792901" data-prod="rw" data-width="0" data-height="0" data-show_rw_logo="1" data-show_rw_badge="1" data-show_rw_text="1" data-show_rw_border="1" data-hid="2310850" data-lang="'+((localStorage.getItem('gps') === "PL") ?"pl" :"en")+'"> <!-- Anything inside will go away once widget is loaded. --> <a href="//www.booking.com?aid=1792901">Booking.com</a> </ins>';
    var aparts = document.querySelectorAll('.our-links>*');
    aparts.forEach(function(i){
        i.style.transform = 'scaleY(1)';
    })
    function isInPage(node) {
        return (node === document.body) ? false : document.body.contains(node);
      }

    flags[0].addEventListener('click', chooseLang);
    flags[1].addEventListener('click', chooseLang);

    if (typeof localStorage.getItem('gps') === 'string' || localStorage.getItem('gps') instanceof String) {
        if (localStorage.getItem('gps') !== 'PL') localStorage.setItem('gps', 'UK');
        fetch('json/' + localStorage.getItem('gps') + '.json').then(function (response) {
            return response.json();
        })
            .then(function (set) {
                return set;
            })
            .then(function (set) {
                langChange(set);
                console.log(localStorage.getItem('gps'));
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
                fetch('json/' + country + '.json')
                    .then(function (response) {
                        console.log(response);
                        return response.json();
                    })
                    .then(function (set) {
                        return set;
                    })
                    .then(function (set) {
                        langChange(set);
                        console.log(country);
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
    if(isInPage(infoMap))infoMap.innerHTML = init.infoMap;
    footerText.innerHTML = init.footerText;
}

function chooseLang(e) {
    var reviews = document.querySelectorAll('.reviews');
    var aboutUsInfoRes = document.querySelector('.res.about-us>strong');
    var aboutUsBodyRes = document.querySelectorAll('.res.about-us__body');
    var btnMore = document.querySelector('.btn-more');
    localStorage.clear();
    localStorage.setItem('gps', e.target.alt);
    flags.forEach(function (i) {
        i.classList.remove('current');
    })
    reviews.forEach(function(i){
        if(isInPage(i)) i.style.display = 'none';
    });
    aboutUsBodyRes.forEach(function(i){
        if(isInPage(i)) i.style.display = 'none';
    })
    if(isInPage(btnMore)) btnMore.style.display = 'none';
    if(isInPage(aboutUsInfoRes)) aboutUsInfoRes.style.display = 'block';
    fetch('json/' + localStorage.getItem('gps') + '.json').then(function (response) {
        return response.json();
    })
        .then(function (set) {
            return set;
        })
        .then(function (set) {
            langChange(set);
            console.log(localStorage.getItem('gps'));
        })
}
}

