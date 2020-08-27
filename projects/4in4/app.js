function onLoad() {

  $('.post').hover(
    function(){
      var image = $(this).children('img')[0];
      var original = image.src.replace('dimmed', 'original');
      image.src = original;
      image.srcset = original;
    },
    function() {
      var image = $(this).children('img')[0];
      var dimmed = image.src.replace('original', 'dimmed');
      image.src = dimmed;
      image.srcset = dimmed;
    });
}
