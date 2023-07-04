// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
const num = prompt("Enter the num:");
if (num > 0) {
  console.log("true");
} else {
  console.log("false");
}

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
var text = prompt("Enter the word:");
if ((text = "true")) {
  console.log("true");
}

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
let num1 = prompt("Enter the num:");
if (num1 > 10) {
  num1 = num1 - 5;
} else {
  num1 = num1 + 5;
}
console.log(num1);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
let num2 = prompt("Enter the number of month:");
let month = null;
switch (num2) {
  case "1":
    month = "January";
    break;
  case "2":
    month = "February";
    break;
  case "3":
    month = "March";
    break;
  case "4":
    month = "April";
    break;
  case "5":
    month = "May";
    break;
  case "6":
    month = "June";
    break;
  case "7":
    month = "July";
    break;
  case "8":
    month = "August";
    break;
  case "9":
    month = "September";
    break;
  case "10":
    month = "October";
    break;
  case "11":
    month = "November";
    break;
  case "12":
    month = "December";
    break;
}
console.log(month);

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
let num3 = prompt("Enter the number: ");
if (num3.length !== 3) {
  alert("Enter only three numbers!");
} else {
  let sum = parseInt(num3[0]) + parseInt(num3[1]) + parseInt(num3[2]);
  alert(sum);
}
