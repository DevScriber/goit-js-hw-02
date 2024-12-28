// cоздадим функцию, которая принимает 3 параметра.
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // создадим переменную, которая будет хранить в себе результат выражения кол-во * стоимость ед. тов.
  const totalPrice = quantity * pricePerDroid;
  // делаем проверку, если стоимость суммы товаров <= денег у клиента, значит ему достаточно денег для покупки
  if (totalPrice <= customerCredits) {
    // если проверка принимает значение true, возвращаем сообщение с использованием шаблонной строки со вставленными значениями из переменных
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else {
    //если в карманах пусто, то так и отвечаем :-)
    return "Insufficient funds!";
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
