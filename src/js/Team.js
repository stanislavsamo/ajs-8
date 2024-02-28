import Character from './Character';

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(newPerson) {
    if (this.members.has(newPerson)) {
      throw new Error('Этот персонаж уже в команде.');
    }

    this.members.add(newPerson);
  }

  addAll(...newPeople) {
    newPeople.forEach((newPerson) => {
      this.members.add(newPerson);
    });
  }

  toArray() {
    return [...this.members];
  }
}

export default function creatingTeam() {
  const myTeam = new Team();
  const first = new Character('Tom', 'Bowerman', 50, 50);
  const second = new Character('Alice', 'Daemon', 40, 20);
  const third = new Character('William', 'Daemon', 40, 20);
  const fourth = new Character('Alexander', 'Bowerman', 50, 50);

  myTeam.add(first);
  myTeam.add(second);

  myTeam.addAll(first, third, fourth);
  return myTeam.toArray();
}
