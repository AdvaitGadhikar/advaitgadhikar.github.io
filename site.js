// Arrow buttons for the photo slideshows.
document.querySelectorAll('.slideshow').forEach(function (show) {
  var slides = show.querySelector('.slides');
  function step(dir) {
    slides.scrollBy({ left: dir * slides.clientWidth * 0.8 });
  }
  show.querySelector('.prev').addEventListener('click', function () { step(-1); });
  show.querySelector('.next').addEventListener('click', function () { step(1); });
});
