$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name", "age", "gender"];

    blanks.forEach(function(blank) {
      var userInptu = $("input." + blank).val();
      $("." + blank).text(userInput).val();
  });
});
