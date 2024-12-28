// создаем функцию, содержащую 2 параметра (сообщение type='string' и  макс. длина сообщения type='number')
function formatMessage(message, maxLength) {
  // при помощи свойства .length преобразуем наше сообщение в количество символов в нем.
  // в проверке сравниваем кол-во символов в сообщении с максимально возможным.
  if (message.length <= maxLength) {
    // если кол-во символов <= макс. то возвращаем сообщение без изменений
    return message;
    // если больше, то...
  } else {
    // создал переменную, которая будет хранить в себе сообщение с максимально возможным кол-вом символов
    // методом .slice() определяем длину подстроки от 0 индекса до maxLength
    const biggestMessage = message.slice(0, maxLength);
    // конкатенируем наше обрезанное сообщение, сохраненное в переменной, с "..."  и возвращаем результат
    return `${biggestMessage}...`;
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
