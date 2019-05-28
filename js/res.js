var arr = [];
fetch('json/comment-single.htm')
  .then(function(res){ return res.text()})
  .then(function(data){
    const parser = new DOMParser();
    const doc = parser
      .parseFromString(data, 'text/html');
    return doc;
}).then(function(doc){
    var quoteArea = document.querySelector('.about-us__quotes');
    var arrHead = doc.querySelectorAll('.bui-avatar-block__title');
    var arrLabel = doc.querySelectorAll('.bui-avatar-block__subtitle');
    var arrBody = doc.querySelectorAll('.c-review__body');
    var index = (Math.floor(Math.random()*9)+1)
    var commentTitle = arrHead[index].innerHTML;
    var commentLabel = arrLabel[index].innerHTML;
    var commentBody = arrBody[index].innerHTML;
    document.querySelector('.about-us__quotes').innerHTML = '<h3>'+commentTitle+'</h3><small>'+commentLabel+'</small><hr><span class="quote">'+commentBody+'</span>'
})