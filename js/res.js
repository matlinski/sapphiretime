var arr = [];
fetch('json/comment-single.htm')
  .then(function(res){ return res.text()})
  .then(function(data){
    const parser = new DOMParser();
    const doc = parser
      .parseFromString(data, 'text/html');
    return doc;
}).then(function(doc){
    arr = doc.querySelectorAll('.c-review__body');
    console.log(arr);
    var comment = arr[(Math.floor(Math.random()*9)+1)].innerHTML;
    document.querySelector('.about-us__quotes').innerHTML = '<span class="quote">'+comment+'</span>'
    /*setInterval(function(){
      
      document.querySelector('.about-us__quotes').innerHTML = '<span class="quote">'+comment+'</span>'
    }, comment.length*65)*/
    
})