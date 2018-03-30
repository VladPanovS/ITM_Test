$(document).ready(function() {
  var sec = $('.seconds');
  var secVal = parseInt(sec.text());

  var timer = setTimeout(function tick() {
    if (secVal > 0) {
      sec.text(--secVal);
      timer = setTimeout(tick, 1000);
    }
  }, 1000);
});
