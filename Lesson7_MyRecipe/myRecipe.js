
/* global $ */

function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("li").click(function(){
 $(this).css("background-color", "maroon");
 }, function(){
 $(this).css("background-color", "pink");
});
