import Character from './character';

const warrior = new Character('Warrior', 'Swordsman', 100, 1, 40, 10);

warrior.damage(34);
console.log(warrior);


const amazon = new Character('Amazon', 'Swordsman', 90, 1, 40, 10);

amazon.levelUp();
console.log(amazon);
