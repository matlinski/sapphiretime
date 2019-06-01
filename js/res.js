'use strict'

document.addEventListener('DOMContentLoaded', function () {
  resStart(document.querySelector('.single.pl'),
          document.querySelector('.single.en'),
          document.querySelector('.double.pl'),
          document.querySelector('.double.en'),
          document.querySelectorAll('.reviews'),
          document.querySelector('.about-us>strong'),
          document.querySelectorAll('.about-us__body'),
          document.querySelector('.btn-more'),
          document.querySelectorAll('.about-us__body>.secondary'),
          document.querySelector('#single-logo'),
          document.querySelector('#double-logo')
          );
          var serviceLinks = document.querySelectorAll('.service');
          serviceLinks.forEach(function(i){
            i.addEventListener('focus', function(e){
              e.path[1].querySelector('img').style.display = "block";
              setTimeout(function(){
                e.path[1].querySelector('img').style.display = "none";
                e.path[1].querySelector('.reserve').style.display = "block";
              }, 1000);
            })
            i.addEventListener('blur', function(e){
              e.path[1].querySelector('img').style.display = "none";
              setTimeout(function(){
                e.path[1].querySelector('img').style.display = "block";
                e.path[1].querySelector('.reserve').style.display = "none";
              }, 1000);
            })
          })
});

function resStart(singlePL,
                  singleEN,
                  doublePL,
                  doubleEN,
                  reviews,
                  aboutUsInfo,
                  aboutUsBody,
                  btnMore,
                  hiddenPart,
                  singleLogo,
                  doubleLogo
                  ){
  var hidden = true;
  var comments = [];
  btnMore.style.display = 'none';
  singleLogo.addEventListener('click', function(){
    singleLogo.classList.add('current');
    doubleLogo.classList.remove('current');
    btnMore.style.display = 'block';
    aboutUsInfo.style.display = 'none';
    aboutUsBody[1].style.display = 'none';
    aboutUsBody[0].style.display = 'block';
    reviews.forEach(function(i){
      i.style.display = 'none';
    })
    if(localStorage.getItem('gps') === 'PL') singlePL.style.display = 'block';
    else singleEN.style.display = 'block';
  })
  doubleLogo.addEventListener('click', function(){
    singleLogo.classList.remove('current');
    doubleLogo.classList.add('current');
    btnMore.style.display = 'block';
    aboutUsInfo.style.display = 'none';
    aboutUsBody[0].style.display = 'none';
    aboutUsBody[1].style.display = 'block';
    reviews.forEach(function(i){
      i.style.display = 'none';
    })
    if(localStorage.getItem('gps') === 'PL') doublePL.style.display = 'block' 
    else doubleEN.style.display = 'block';
  })

    btnMore.addEventListener('click', function(e){
    (hidden === true) ?hidden = false :hidden = true;
    
    e.preventDefault();
    hiddenPart.forEach(function(i){
      i.classList.toggle("hidden")
    })
    if(hidden === true) (localStorage.getItem('gps') === 'PL') ?btnMore.innerHTML = 'rozwiń' :btnMore.innerHTML = 'show more';
    if(hidden === false) (localStorage.getItem('gps') === 'PL') ?btnMore.innerHTML = 'zwiń' :btnMore.innerHTML = 'show less';
  })
  runComments()
  function runComments(){
    getComments(
      'single',
      'pl',
      document.querySelectorAll(".reviews__stayed"),
      document.querySelectorAll(".reviews__reviewed"), 
      document.querySelectorAll(".reviews__pic"), 
      document.querySelectorAll(".reviews__name>span"), 
      document.querySelectorAll(".reviews__country"), 
      document.querySelectorAll(".reviews__positive"),
      document.querySelectorAll(".reviews__score>span"),
      0
      )
    
    getComments(
      'single',
      'en',
      document.querySelectorAll(".reviews__stayed"),
      document.querySelectorAll(".reviews__reviewed"), 
      document.querySelectorAll(".reviews__pic"), 
      document.querySelectorAll(".reviews__name>span"), 
      document.querySelectorAll(".reviews__country"), 
      document.querySelectorAll(".reviews__positive"),
      document.querySelectorAll(".reviews__score>span"),
      1
      )
    
    getComments(
        'double',
        'pl',
        document.querySelectorAll(".reviews__stayed"),
        document.querySelectorAll(".reviews__reviewed"), 
        document.querySelectorAll(".reviews__pic"), 
        document.querySelectorAll(".reviews__name>span"), 
        document.querySelectorAll(".reviews__country"), 
        document.querySelectorAll(".reviews__positive"),
        document.querySelectorAll(".reviews__score>span"),
        2
        )
      getComments(
        'double',
        'en',
        document.querySelectorAll(".reviews__stayed"),
        document.querySelectorAll(".reviews__reviewed"), 
        document.querySelectorAll(".reviews__pic"), 
        document.querySelectorAll(".reviews__name>span"), 
        document.querySelectorAll(".reviews__country"), 
        document.querySelectorAll(".reviews__positive"),
        document.querySelectorAll(".reviews__score>span"),
        3
        )
        function getComments(
          apart,
          lang,
          stayedArea,
          reviewedArea,
          picArea,
          nameArea,
          countryArea,
          positiveArea,
          scoreArea,
          version
          ){
        
          fetch('json/'+apart+'.'+lang+'.json')
        .then(res => res.json())
        .then(data => {
          for(var i = 0; i < data.length; i++){
          comments.push({
              stayed: data[i].date.stayed,
              reviewed: data[i].date.reviewed,
              pic: (typeof data[i].guest.pic === 'string' || data[i].guest.pic instanceof String) ?data[i].guest.pic : 'https://a.wattpad.com/useravatar/AliensTear.256.117810.jpg',
              name: data[i].guest.name,
              country: data[i].guest.country,
              positive: data[i].review.positive,
              score: data[i].score
          })
          }
          var  qouteSwap = function(index){ return function(){
              showComment(index);
          return setTimeout( qouteSwap(Math.floor(Math.random()*(comments.length-1))),(comments[index].positive.length*90 < 4000) ?4000 :comments[index].positive.length*110)
          }
        } 
        qouteSwap(Math.floor(Math.random()*(comments.length-1)))()
        
          function showComment(randomIndex){
              stayedArea[version].innerHTML = comments[randomIndex].stayed;
              reviewedArea[version].innerHTML = comments[randomIndex].reviewed;
              picArea[version].src = comments[randomIndex].pic;
              nameArea[version].innerHTML = comments[randomIndex].name;
              countryArea[version].innerHTML = comments[randomIndex].country;
              positiveArea[version].innerHTML = comments[randomIndex].positive;
              (comments[randomIndex].score !== null) ?scoreArea[version].innerHTML = comments[randomIndex].score+'/10':scoreArea[version].innerHTML = "N/A";
          }
          
        })
        }
  }
}



















