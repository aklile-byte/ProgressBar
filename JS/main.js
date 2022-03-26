// move the status bar from 50% t0 100%
function move(selected) {
  var elem = document.getElementById(selected);
  var width = 50;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}
// rpeatedly excute move function for each statusbar
function repeat() {
  move("green");
  move("red");
  move("white");
  move("yelow");
  move("blue");
}
