import Character from '../character';


test('testing whether Character with params could be created', () => {
  const Alfa = new Character('Alfa', 'Swordsman', 100, 1, 40, 10);
  expect(Alfa).toEqual({
    name: 'Alfa',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('testing whether there will be an Error with wrong param type', () => {
  expect(() => new Character('Betta', 'Gorilla', 100, 1, 80, 80)).toThrow('Тип персонажа(type) не соответствует вселенной!');
});

test('testing whether there will be an Error with wrong param name', () => {
  expect(() => new Character('Navoohodonoser', 'Magician', 100, 1, 10, 40)).toThrow('Имя персонажа (name) должно быть строкой длиной от 2 до 10 символов!');
});

test('testing whether there will be an Error with wrong param name', () => {
  expect(() => new Character(15, 'Undead', 100, 1, 25, 25)).toThrow('Имя персонажа (name) должно быть строкой длиной от 2 до 10 символов!');
});

test('testing whether method levelup actually leveling up ', () => {
  const Alfa = new Character('Alfa', 'Swordsman', 80, 1, 40, 10);
  Alfa.levelUp();
  expect(Alfa).toEqual({
    name: 'Alfa',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test('testing whether method levelup someone as dead as communism ', () => {
  const Alfa = new Character('Alfa', 'Swordsman', 0, 1, 40, 10);
  expect(() => Alfa.levelUp()).toThrow('Нельзя повысить левел умершего!');
});

test('testing whether method damage(points) deals damage to the characters health', () => {
  const Alfa = new Character('Alfa', 'Swordsman', 100, 1, 40, 10);
  Alfa.damage(100);
  expect(Alfa).toEqual({
    name: 'Alfa',
    type: 'Swordsman',
    health: 10,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('testing whether method damage(points) can hurt someone as dead as communism ', () => {
  const Alfa = new Character('Alfa', 'Swordsman', 0, 1, 40, 10);
  expect(() => Alfa.damage(100)).toThrow('Полегче, брат, ему уже хватит!');
});
