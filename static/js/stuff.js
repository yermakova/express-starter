alert("Welcome to the page of Val's CS experiments!"); 

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert("hello world!");
  $('#say_hello').text("You already said hi :)");
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#pink').click(function() {
  $('#tickled_text').css("color", "pink");
});


// Problem 4 (Greet Me) -----------------------------------------------------
$('#greetme').click(function() {
  alert('Hey there ' + $('#my_name').val() + ", I hope you're having a spectacular day!");
});
