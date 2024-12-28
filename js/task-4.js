//  создадим фукцию с одним параметром
function getShippingCost(country) {
  // так как у нас нет параметра price, а в задании есть стоимость доставки, то нам необходимо создать переменную, которая будет хранить значения цен
  let price;
  // на данный момент значение price === undefined. в теле функции написал console.log(price), затем вызвал функцию getShippingCost(). проверил, увидел, гуд.
  // теперь делаем проверку с использованием switch case
  switch (country) {
    case "China":
      price = 100;
      break;
    case "Chile":
      price = 250;
      break;
    case "Australia":
      price = 170;
      break;
    case "Jamaica":
      price = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return `Shipping to ${country} will cost ${price} credits`;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
