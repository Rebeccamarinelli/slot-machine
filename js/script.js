// '🃏'
// '🍒'
// '🍊'
// '🍇'
// '🍓'
// '🍉'




function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}


const jolly = '🃏';
const cherry = '🍒';
const orange = '🍊';
const grape = '🍇';
const strawberry = '🍓';
const watermelon = '🍉';
const btn = document.getElementById('start');
const message = document.getElementById('message');
const firstSlot = document.getElementById('first-slot');
const scdSlot = document.getElementById('second-slot');
const thirdSlot = document.getElementById('third-slot');


btn.addEventListener('click', function(){

    const randomNumber1 = getRandomInt(1, 7);
    const randomNumber2 = getRandomInt(1, 7);
    const randomNumber3 = getRandomInt(1, 7);

    geSlot(randomNumber1, firstSlot)
    geSlot(randomNumber2, scdSlot)
    geSlot(randomNumber3, thirdSlot)
    
    printMessage(randomNumber1, randomNumber2, randomNumber3)

    console.log(randomNumber1, randomNumber2, randomNumber3)
    
})


const geSlot = function (numberRandom, slot){
    if(numberRandom == 1){
        slot.innerHTML = jolly;
    }else if(numberRandom == 2){
        slot.innerHTML = cherry;
    }else if(numberRandom == 3){
        slot.innerHTML = orange;
    }else if(numberRandom == 4){
        slot.innerHTML = grape;
    }else if(numberRandom == 5){
        slot.innerHTML = strawberry;
    }else{
        slot.innerHTML = watermelon;
    }
}


const printMessage = function (random1, random2, random3){
    if(random1 == 1 && random2 == 1 && random3 == 1){
        message.innerHTML = 'Hai perso';
    } else if(random1 == 1 && random2 == random3){
        message.innerHTML = 'Hai vinto';
    } else if(random2 == 1 && random1 == random3){
        message.innerHTML = 'Hai vinto';
    } else if(random3 == 1 && random2 == random1){
        message.innerHTML = 'Hai vinto';
    } else if(random1 == random2 && random2 == random3){
        message.innerHTML = 'Hai vinto';
    }else{
        message.innerHTML = 'Hai perso';
    }
}




