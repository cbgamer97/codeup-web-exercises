// jQuery selector
let $jQueryParent = $('#paragraphParent')

//I CANNOT DO THIS
// jQueryParent.style.color = 'red';

// vanilla javascript equivalent

let vanillaParent = document.querySelector('#paragraphParent');

// CHANGING ONE CSS PROPERTY
$jQueryParent.css('color', 'red');

//OR CHANGE A BUNCH OF THEM

$jQueryParent.css({
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'fontStyle': 'italic'
});

// ADDING CLASSES WITH JQUERY

$jQueryParent.addClass('active')