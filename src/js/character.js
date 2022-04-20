export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа (name) должно быть строкой длиной от 2 до 10 символов!');
    } else {
      this.name = name;
    }
    if (!Character.types.includes(type)) {
      throw new Error('Тип персонажа(type) не соответствует вселенной!');
    } else {
      this.type = type;
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Полегче, брат, ему уже хватит!');
    }
  }
}

Character.types = [
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
