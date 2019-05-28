var lang = 'pl';
var comments = [];
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
    console.log(comments)
  })