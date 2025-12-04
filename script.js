"use strict";

// элементы, куда буду выводить дату
const formatAElement = document.getElementById("format-a");
const formatBElement = document.getElementById("format-b");

// массивы дней недели и месяцев
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

// Функция склонения слов: час / часов / часа
function getWordForm(number, forms) {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return forms[2]; // часов
  }
  if (n1 > 1 && n1 < 5) {
    return forms[1]; // часа
  }
  if (n1 === 1) {
    return forms[0]; // час
  }
  return forms[2]; // часов
}

// Функция для добавления ведущего нуля
// из 9 делает "09"
function addZero(num) {
  return num < 10 ? "0" + num : String(num);
}

// основная функция обновления времени
function updateTime() {
  const now = new Date();

  const dayOfWeek = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды
  const hoursWord = getWordForm(hours, ["час", "часа", "часов"]);
  const formatA =
    `Сегодня ${dayOfWeek}, ${day} ${month} ${year} года, ` +
    `${hours} ${hoursWord} ${minutes} минут ${seconds} секунд`;

  // 04.02.2020 - 21:05:33
  const formatB =
    `${addZero(day)}.${addZero(now.getMonth() + 1)}.${year} - ` +
    `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

  // вывод на страницу
  formatAElement.textContent = formatA;
  formatBElement.textContent = formatB;
}

// первый запуск сразу
updateTime();

// Обновление каждую секунду
setInterval(updateTime, 1000);
