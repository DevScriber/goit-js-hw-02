// создаем функцию которая принимает один параметр type="string"
function checkForSpam(message) {
  // как как строка в парам. может быть в произвольном регистре, значит нм стоит нормализовать строку, т.е. привести ее к верхнему или нижнему регистру, для этого создадим локальную переменную.
  const normalMessage = message.toLowerCase();
  // создаем проверку при помощи метода includes(), который возвращает нам булевые значения, что и требуется по заданию. т.к. методу includes() можно задать только один параметр, то воспользуемся оператором "или"
  const checkMessage =
    normalMessage.includes("spam") || normalMessage.includes("sale");

  return checkMessage;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
