let $toggleClass = $('.invisible');

$(document).ready(function() {
    $('#hidden').on('click', function() {
        $('dd').toggleClass('invisible');
    });
});