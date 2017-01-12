$(document).ready(function(){
  $('#submit').submit(function(event){
    var animalChoice = $('#choose').val();
    if (animalChoice === "turtles"){
      $('#turtles').show();
    } else if (animalChoice === "snakes") {
      $('#snakes').show();
    } else if (animalChoice === "penguins") {
      $('#penguins').show();
    } else if (animalChoice === "insects") {
      $('#insects').show();
    } else if (animalChoice === "bears") {
      $('#bears').show();
    }
    event.preventDefault();
  })
})
