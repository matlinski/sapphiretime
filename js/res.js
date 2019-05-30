document.addEventListener('DOMContentLoaded', function () {
  resStart();
});

function resStart(){
  var singlePL = document.querySelector('.single.pl');
  var singleEN = document.querySelector('.single.en');
  var doublePL = document.querySelector('.double.pl');
  var doubleEN = document.querySelector('.double.en');
  var reviews = document.querySelectorAll('.reviews');
  var aboutUsInfo = document.querySelector('.about-us>strong');
  var aboutUsBody = document.querySelectorAll('.about-us__body');
  var btnMore = document.querySelector('.btn-more')
  var hiddenPart = document.querySelectorAll('.about-us__body>span')
  var hidden = true;
  var singleLogo = document.querySelector('#single-logo');
  var doubleLogo = document.querySelector('#double-logo');
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
    if(hidden === true) btnMore.innerHTML = 'rozwiń';
    if(hidden === false) btnMore.innerHTML = 'zwiń';
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
            var comments = [];
        
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
          return setTimeout( qouteSwap(Math.floor(Math.random()*(comments.length-1))), comments[index].positive.length*90)
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



















