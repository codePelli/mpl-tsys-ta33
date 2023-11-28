//Ejercicio11

const dice = 6;
const rolls = 36000;

//Reusultado minimo 2 - máximo 12
const chance = Array.from({ length: 11 }, () => 0);

for (let x = 0; x < rolls; x++){

    //Uso de Math.floor para redondear
    let play = Math.floor(Math.random() * dice);
    let play2 = Math.floor(Math.random() * dice);

    let sum = play + play2;

    chance[sum - 2] ++;
}

console.log(chance);

