function wordfunction() {
  var encourage_words = ["run on caffeine and curiosity", "make stuff, break stuff, learn everything in between", "debug life one problem at a time",
  "break things to fix them better", "troubleshoot by day, gravity test by night"]

  var random = Math.ceil(Math.random() * encourage_words.length - 1)

  document.getElementById("encouraging_quote").innerText = encourage_words[random]
};

window.onload = function onloadfunction() {
  var encourage_words = ["run on caffeine and curiosity", "make stuff, break stuff, learn everything in between", "debug life one problem at a time",
  "break things to fix them better", "troubleshoot by day, gravity test by night"]
  
  var random = Math.ceil(Math.random() * encourage_words.length - 1)
  
  document.getElementById("encouraging_quote").innerText = encourage_words[random]
};



