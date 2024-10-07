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
