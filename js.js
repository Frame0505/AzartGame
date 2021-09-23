let btn = document.querySelector("#play");
let chance = document.querySelector("#chance")
let random = document.querySelector('#random')

function Random (){ 
    const max = 100;
    return Math.round(Math.random() * max );
}

btn.onclick = function() {
    random.innerHTML = Random();

    if(random.innerHTML >= 50) {
        alert('Вы выйграли! Вам выпало число: ' + random.innerHTML);
    } else if (random.innerHTML <= 50) {
        alert('Вы проиграли! Вам выпало число: ' + random.innerHTML)
    }
}