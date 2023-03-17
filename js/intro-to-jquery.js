// `$` SHORTHAND FOR DECLARING JQUERY FUNCTION
// jQuery('h3').click(function () {
//    $(this).next().slideToggle(500);
// });


// IF WE ASK OUR JAVASCRIPT TO ACCESS DOM ELEMENTS BUT THOSE ELEMENTS HAVE NOT LOADED YET, THEM OUR JAVASCRIPT CANT
// ACCESS THEM. WE CAN GET AROUND THIS BY ASKING OUR JAVASCRIPT TO WAIT UNTIL THE PAGE HAS LOADED.



function init() {
   jQuery('h3').click(function () {
      $(this).next().slideToggle(500);
   });
}

window.onload = init;