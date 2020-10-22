const Dino = document.querySelector("Dino")
function hondlekeyUp(event)
{if(event.keycode = 32) {
junp();
 }
}
function junp() {
let position = 0;

let upinterval = setInterval(() =>{
    if (position >= 150){
        elearinterval(upinterval);
//desendo
let downinterval = setInterval(() => {
    if (position >= 0)
    position -= 20;
    Dino.style.bottom = position + 'px';
}, 20);
    } else {
//subindo
position += 20;
Dino.style.bottom = position + 'px';
    }
}, 20);
}
document.addEventListener('keyupe', hondlekeyUp);