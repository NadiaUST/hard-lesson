const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const today = new Date();

// JS выдаёт:
// 0 = воскресенье, 1 = понедельник … 6 = суббота
// Делаем так, чтобы ПОНЕДЕЛЬНИК = 0
let jsDayIndex = today.getDay();
let todayIndex = (jsDayIndex + 6) % 7; // сдвигаем

for (let i = 0; i < week.length; i++) {
  let day = week[i];

  // выходные — курсив
  if (i === 5 || i === 6) {
    day = "<i>" + day + "</i>";
  }

  // сегодня — жирным
  if (i === todayIndex) {
    day = "<b>" + day + "</b>";
  }

  document.write(day + "<br>");
}
