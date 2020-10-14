const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const niaou = document.querySelector('.sldContainer');
const imgs = document.querySelectorAll('.sldContainer img');


let  counter = 1;
const size = imgs[0].clientWidth;

niaou.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener('click', function () {
    if(counter >= imgs.length -1) return;
    niaou.style.transition = 'transform 0.5s ease-in-out'
    counter++;
    niaou.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click', function () {
    if(counter <= 0) return;
    niaou.style.transition = 'transform 0.5s ease-in-out'
    counter--;
    niaou.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

niaou.addEventListener('transitionend', () => {
    if (imgs[counter].id === 'lastClone'){
        niaou.style.transition = "none";
        counter = imgs.length - 2;
        niaou.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (imgs[counter].id === 'firstClone'){
        niaou.style.transition = "none";
        counter = imgs.length - counter;
        niaou.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})