window.onload = function wordfunction() {
  var encourage_words = ["with the google search engine as a mentor", "Improvise. Adapt. Overcome.", "fall seven times, stand up eight.",
  "harder, better, faster, and stronger.", "should've taken ''bio making 101.''"]

  var random = Math.ceil(Math.random() * encourage_words.length - 1)

  document.getElementById("encouraging_quote").innerText = encourage_words[random]
};