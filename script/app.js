function sec2() {
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec4").style.display = "none";

  var x = (document.getElementById("sec2").style.display = "flex");
  document.getElementById("audio").play();
  document.getElementById("sec3").style.display = "none";
}

function sec1() {
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec4").style.display = "none";

  var x = (document.getElementById("sec1").style.display = "flex");
  document.getElementById("audio").play();
}

function sec3() {
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec1").style.display = "none";
  document.getElementById("sec4").style.display = "none";
  document.getElementById("sec3").style.display = "flex";

  document.getElementById("alert-additional-content-3").classList = "alert";
  var x = (document.getElementById("sec3").style.display = "flex");
  document.getElementById("audio").play();
}

function sec4() {
  document.getElementById("sec2").style.display = "none";
  document.getElementById("sec3").style.display = "none";
  document.getElementById("sec1").style.display = "none";

  var x = (document.getElementById("sec4").style.display = "flex");
  document.getElementById("audio").play();
}

function playAudio() {
  document.getElementById("audio").play();
}
