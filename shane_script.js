function wordfunction() {
  var encourage_words = ["running on caffeine and curiosity", "making stuff, breaking stuff, learning everything in between", "debugging life one problem at a time",
  "breaking things to fix them better", "troubleshooting by day, gravity testing by night"]

  var random = Math.ceil(Math.random() * encourage_words.length - 1)

  document.getElementById("encouraging_quote").innerText = encourage_words[random]
};

window.onload = function onloadfunction() {
  var encourage_words = ["running on caffeine and curiosity", "making stuff, breaking stuff, learning everything in between", "debugging life one problem at a time",
  "breaking things to fix them better", "troubleshooting by day, gravity testing by night"]
  
  var random = Math.ceil(Math.random() * encourage_words.length - 1)
  
  document.getElementById("encouraging_quote").innerText = encourage_words[random]
};




