

$(document).ready(function() {
    $('#hidden').on('click', function() {
        $('dd').toggleClass('invisible');
    });

    $('dt').on('click', function (event){
        event.preventDefault();
        if ($(this).hasClass('highlight')){
            $(this).removeClass('highlight');
        } else {
            $(this).addClass('highlight');
        }
    });
});