let num = 266219;
let str = num.toString(); // число превращаем в строку чтобы разбить массив
// создаю переменную для храниния результата умножение
let product = 1; // пишу 1 потому что если начать с 0 то любое умножение даст 0
// создаю цикл который пробежит по каждому символу строки
for (let i = 0; i < str.length; i++) {
  let digit = Number(str[i]); // преобразую символ в число чтобы умножать
  product = product * digit; // умножаю текущее значение переменной product на цифру
}
let powered = product ** 3; // возводим результат в степень 3
let poweredStr = powered.toString(); // превращаем число в строку
let firstTwoDigits = poweredStr.slice(0, 2); // беру первые 2 символа
console.log(firstTwoDigits); // вывожу результат
