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
    var showComment = function(index){
      qouteSwap(index)
      index = Math.floor(Math.random()*(comments.length-1));
      return setTimeout(qouteSwap(index), comments[index].positive.length*65)
    }
    showComment(Math.floor(Math.random()*(comments.length-1)))()

    function qouteSwap(randomIndex){
      console.log(randomIndex, comments[randomIndex].positive)
      console.log(randomIndex, comments[randomIndex].positive.length*65)
      stayedArea.innerHTML = comments[randomIndex].stayed;
        reviewedArea.innerHTML = comments[randomIndex].reviewed;
        picArea.src = comments[randomIndex].pic;
        nameArea.innerHTML = comments[randomIndex].name;
        countryArea.innerHTML = comments[randomIndex].country;
        positiveArea.innerHTML = comments[randomIndex].positive;
        (comments[randomIndex].score !== null) ?scoreArea.innerHTML = comments[randomIndex].score+'/10':scoreArea.innerHTML = "N/A";
    }
    
  })
