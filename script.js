function processString(input) {
  // 1. Проверяю, строка ли это
  if (typeof input !== "string") {
    console.log("Ошибка: аргумент должен быть строкой.");
    return;
  }
  // 2. Убираю пробелы в начале и конце
  let trimmed = input.trim();
  // 3. Если строка длиннее 30 символов — обрезаю и добавляю "..."
  if (trimmed.length > 30) {
    trimmed = trimmed.slice(0, 30) + "...";
  }
  console.log(trimmed);
  return trimmed;
}
