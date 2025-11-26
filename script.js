// первая задача

let arr = ["23", "35", "43", "65", "75", "32", "48"];

for (let num of arr) {
  if (num[0] === "2" || num[0] === "4") {
    console.log(num);
  }
}
let result = arr.filter((num) => num[0] === "2" || num[0] === "4");

console.log(result);

// вторая задача

// перебираю все числа от 2 до 100
for (let num = 2; num <= 100; num++) {
  let isPrime = true; // предполагаю, что число простое

  // проверяю, делится ли num на i.
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      // если делится, то оно непростое,значит будет isPrime = false.
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${num} — простое число. Делители этого числа: 1 и ${num}`);
  }
}
