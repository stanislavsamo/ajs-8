import Character from '../Character';

test('should create Character for name "String"', () => {
  const result = new Character('String', 'Bowerman', 25, 25);

  expect(result).toEqual({
    name: 'String',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('should be Error for name "NotString"', () => {
  expect(() => new Character(150, 'Bowerman', 25, 25)).toThrow(
    'Некорректные значения',
  );
});

test('should be Error for too little name "A"', () => {
  expect(() => new Character('A', 'Bowerman', 25, 25)).toThrow(
    'Некорректные значения',
  );
});

test('should be Error for too long name "ElevenLetters"', () => {
  expect(() => new Character('ElevenLetters', 'Bowerman', 25, 25)).toThrow(
    'Некорректные значения',
  );
});

test('should be Error for the type "undefined"', () => {
  expect(() => new Character('Bowerman', undefined, 25, 25)).toThrow(
    'Некорректные значения',
  );
});

test('should be Error for the type "Number"', () => {
  expect(() => new Character('Bowerman', 150, 25, 25)).toThrow(
    'Некорректные значения',
  );
});

test('should be Error for health <= 0 and level up', () => {
  expect(() => {
    const bowerman = new Character('Bowerman', 'Bowerman', 25, 25);
    bowerman.damage(135); // health drops to 0
    bowerman.levelUp();
  }).toThrow('Повысить уровень мертвого персонажа нельзя');
});

test('should be Error for health <= 0 and damage', () => {
  expect(() => {
    const bowerman = new Character('Bowerman', 'Bowerman', 25, 25);
    bowerman.damage(135); // health drops to 0
    bowerman.damage(1);
  }).toThrow('Повысить уровень мертвого персонажа нельзя');
});

test('should level, attack, defence, health  up to 2, 30, 30, 100', () => {
  const user = new Character('String', 'Bowerman', 25, 25);
  user.levelUp();

  expect(user).toEqual({
    name: 'String',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('should health  down to 97', () => {
  const user = new Character('String', 'Bowerman', 25, 25);
  user.damage(4);

  expect(user).toEqual({
    name: 'String',
    type: 'Bowerman',
    health: 97,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
