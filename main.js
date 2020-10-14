const right = document.getElementById('right');
const left = document.getElementById('left');
const btn = document.querySelectorAll('button');
const sld = document.querySelector('.sldContainer');
const imgs = document.querySelectorAll('.imgs');


let inx = 0;


btn.forEach(buttons =>{
    buttons.addEventListener('click',function(){
        if (buttons.id == 'right'){
            inx++;
            imgs.style.transform = `translateX(${-inx * 600}px)`;
        }else if (buttons.id == 'left'){
            inx--;
            imgs.style.transform = `translateX(${inx * 600}px)`; 
        }
    })
})

