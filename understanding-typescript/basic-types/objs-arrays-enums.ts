
enum Level {
  ADMIN, 
  READ_ONLY, 
  AUTHOR
}

const person: {
  name: string
  age: number
  hobbies: string[]
  roles: [string, string]
  level: Level
} = {
  name: 'John',
  age: 30,
  hobbies: ['Skate', 'Surf', 'Paint'],
  roles: ['Designer', 'Bartender'],
  level: Level.ADMIN
}

console.log(person.name);