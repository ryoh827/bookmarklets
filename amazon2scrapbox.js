javascript:(function(){
  var title = document.getElementById("productTitle").innerText.trim();
  if (!title) return;

  var page_title = '『'+ title +'』';

  var image_url = document.getElementById("imgTagWrapperId").getElementsByTagName('img')[0].getAttribute('src');

  var body = '[' + image_url + ']\n\n' + '#書籍名';

  window.open('https://scrapbox.io/ryoh827/'+encodeURIComponent(page_title.trim())+'?body='+encodeURIComponent(body))
})();

