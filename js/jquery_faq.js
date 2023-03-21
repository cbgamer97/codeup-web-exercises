

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

    $('#yellow-li').on('click',function (event) {
        event.preventDefault();
        $('li').each(function (index){
            if (index === 3 || index === 7 || index === 11) {
                $(this).css({
                    'backgroundColor': 'yellow'
                })
            }
        })
    })

    $('h3').on('click', function (event){
        event.preventDefault();
        $('h3').next().css({
            'fontWeight': 'bold'
        })
    })

    $('li').on('click', function(event){
        event.preventDefault();
        $('li').each(function(index){
            if (index === 0 || index === 4 || index === 8){
                $(this).css({
                    'color': 'blue'
                })
            }
        })
    })
});

