//Task 1

const randomNumberArray = () => {
  let zufallszahlen = [];
  for (let i = 0; i < 10; i++) {
    zufallszahlen[i] = Math.random() * (50 - 0);
  }
  console.log(zufallszahlen);
  return zufallszahlen;
};
randomNumberArray();
let sum = randomNumberArray().reduce((a, b) => a + b, 0);
console.log('average:' + sum / 10);

//Task 2
console.log('');
async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  console.log('Hey');
}
sleep(2000);

//Task 3
console.log('');
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const chrissisDog = new Dog('Fridolin', 3);
const dannyDog = new Dog('Astera', 5);
const bastisDog = new Dog('Pluto', 2);
const binesDog = new Dog('Peggy', 15);

console.log(chrissisDog);
console.log(dannyDog);
console.log(bastisDog);
console.log(binesDog);

//Task 4
async function fetchDogBreeds() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    console.log('Hunderassen:');
    console.log(Object.keys(data.message));
  } catch (error) {
    console.error('Fehler bei der Anfrage:', error);
  }
}

fetchDogBreeds();
