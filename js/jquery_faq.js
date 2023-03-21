

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

    $('#yellowLi').on('click',function (event) {
        event.preventDefault();
        $('#parkFacts').find('ul li:last-child').toggleClass('highlight');
    })

    $('h3').on('click', function (event){
        event.preventDefault();
        let $nextUl = $(this).next();
        $nextUl.find('li').css('fontWeight', 'bold');
    })

    $('li').on('click', function(event){
        event.preventDefault();
        $(this).parent().children().first().css('color', 'blue');
    })

    $('.swap-btn').on('click', function () {
        let btn = $(this).attr('id');
        let $commonParent = $(this).parents('.row');
        let $images = $commonParent.find('img');
        let imgSources = [];
        $images.each(function (){
            let srcValue = $(this).attr('src');
           imgSources.push(srcValue);
        });
        switch (btn){
            case 'button1':
                $($images[0]).attr('src', imgSources[1]);
                $($images[1]).attr('src', imgSources[0]);
                console.log('clicked1')
                break;
            case 'button2':
                let randomNum = randomNumber(1, 2);
                if (randomNum === 1) {
                    $($images[1]).attr('src', imgSources[0]);
                    $($images[0]).attr('src', imgSources[1]);
                } else {
                    $($images[1]).attr('src', imgSources[2]);
                    $($images[2]).attr('src', imgSources[1]);
                }
                console.log('clicked2')
                break;
            case 'button3':
                $($images[2]).attr('src', imgSources[1]);
                $($images[1]).attr('src', imgSources[2]);
                console.log('clicked3')
                break;
        }
    })
});

