'use strict'

let clickMe = document.querySelector('#clickMe');

let allButtons = document.querySelectorAll('.btn')

let pageWrapper = document.querySelector('.page-wrapper')

// clickMe.innerText = 'Hello World!'

let btnColumn = document.querySelector("#btn-column");

// let newHtml = `
//     <button class="btn">
//         New Button
//     </button>
// `;

// creating node on the fly

let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');

btnColumn.appendChild(buttonNode);
buttonNode.addEventListener('click', function() {
    alert('It worked!')
})


buttonNode.innerText = 'I am a new button!';

//


// btnColumn.insertAdjacentHTML('beforeend', newHtml);

let newButton = document.querySelector('#newButton');

// allButtons.forEach(function(button) {
//     button.style.backgroundColor = 'green';
// })
//
// clickMe.addEventListener('click', function (){
//     pageWrapper.classList.toggle('red');
// });

