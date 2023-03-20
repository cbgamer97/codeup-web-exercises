$(document).ready(function(){

    // ALERT ON PAGE LOAD
    $("html").ready(function (){
        alert('The page has loaded!');
    })

    // ID SELECTOR
    $('#samg').click(function(){
        let contents = $('#samg').html();
        alert(contents);
    })

    //CLASS SELECTOR
    $('.codeup').css('border', '1px solid red');

    // ELEMENT SELECTOR

    $('li').css('font-size', '20px')
    $('li, h1, p').css('font-family', 'Apple Chancery')
    $('h1').ready(function (){
        let contents = $('h1').html();
       alert(contents);
    });

    // MOUSE EVENTS

    $('h1').click(function (){
        $(this).css('background-color', 'red');
    });

    $('p').dblclick(function (){
        $(this).css('font-size', '18px');
    })

    $('li').hover(
        function () {
            $(this).css('color', 'red');
        },
        function () {
            $(this).css('color', 'black');
        }
    );
});