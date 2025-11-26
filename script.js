const lang = "ru"; // первое задание через if

if (lang === "ru") {
  console.log([
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ]);
} else if (lang === "en") {
  console.log([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
}

const lang = "ru"; // второе задание через switch-case

switch (lang) {
  case "ru":
    console.log([
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ]);
    break;
  case "en":
    console.log([
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ]);
  default:
    console.log("Неизвестный язык");
}

const lang = "ru"; // третье задание через многомерный массив

const days = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

// Проверяем наличие языка в объекте и выводим соответствующий массив
console.log(days[lang] || "Неизвестный язык");

// Второе задание
let namePerson = "Артем";

let result =
  namePerson === "Артем"
    ? "директор"
    : namePerson === "Александр"
    ? "преподаватель"
    : "студент";

console.log(result);
