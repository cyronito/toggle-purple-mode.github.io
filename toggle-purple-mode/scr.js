const btn = document.querySelector('#btn');
const card = document.querySelector('.card');
const span = document.querySelector('span');
const p = document.querySelector('p');

btn.addEventListener('click', function(){
    document.body.classList.toggle('purple-mode');
    card.classList.toggle('card-purple');
    span.classList.toggle('span-purple');
    p.classList.toggle('p-purple');
});