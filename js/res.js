var lang = 'pl';
var comments = [];
var stayedArea = document.querySelector(".reviews__stayed")
var reviewedArea = document.querySelector(".reviews__reviewed")
var picArea = document.querySelector(".reviews__pic")
var nameArea = document.querySelector(".reviews__name>span")
var countryArea = document.querySelector(".reviews__country")
var positiveArea = document.querySelector(".reviews__positive")
var scoreArea = document.querySelector(".reviews__score>span")
fetch('json/single.' + lang + '.json')
  .then(res => res.json())
  .then(data => {
    for(var i = 0; i < data.length; i++){
      comments.push({
        stayed: data[i].date.stayed,
        reviewed: data[i].date.reviewed,
        pic: data[i].guest.pic,
        name: data[i].guest.name,
        country: data[i].guest.country,
        positive: data[i].review.positive,
        score: data[i].score
      })
    }
    var randomIndex = Math.floor(Math.random()*(comments.length-1));
    setTimeout(qouteSwap(randomIndex),comments[randomIndex].positive.length*65);


    function qouteSwap(random){
      console.log(comments[random].positive.length)
      console.log(comments[random].positive.length*65)
      stayedArea.innerHTML = comments[random].stayed;
        reviewedArea.innerHTML = comments[random].reviewed;
        picArea.src = comments[random].pic;
        nameArea.innerHTML = comments[random].name;
        countryArea.innerHTML = comments[random].country;
        positiveArea.innerHTML = comments[random].positive;
        (comments[random].score !== null) ?scoreArea.innerHTML = comments[randomIndex].score+'/10':scoreArea.innerHTML = "N/A";
    }
    
  })
