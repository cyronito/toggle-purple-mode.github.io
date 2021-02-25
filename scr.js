const btn = document.querySelector('#btn');
const card = document.querySelector('.card');
const span = document.querySelector('span');
const p = document.querySelector('p');
const footer = document.querySelector('.footer');
const pFooter = document.querySelector('.footer p');
const h3 = document.querySelector('h3');


btn.addEventListener('click', function(){

    document.body.classList.toggle('purple-mode');
    card.classList.toggle('card-purple');
    span.classList.toggle('span-purple');
    p.classList.toggle('text-white');
    btn.classList.toggle('button-purple');
    footer.classList.toggle('footer-purple');
    h3.classList.toggle('text-white');
    pFooter.classList.toggle('text-white')
});
