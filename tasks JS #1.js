// TASK 4-9
let clientOS = Number(
  prompt("если вы используете iOS, введите 0, если  Android введите 0")
);
let clientDeviceYear = Number(prompt("введите год прозводства телефона"));

if (clientDeviceYear >= 2015) {
  switch (clientOS) {
    case 0:
      alert("Установите версию приложения для iOS по ссылке");
      break;
    case 1:
      alert("Установите версию приложения для Android по ссылке");
      break;
    default:
      alert("ошибка ввода");
      break;
  }
} else {
  switch (clientOS) {
    case 0:
      alert("Установите облегченную версию приложения для iOS по ссылке");
      break;
    case 1:
      alert("Установите облегченную версию приложения для Android по ссылке");
      break;
    default:
      alert("ошибка ввода");
      break;
  }
}

// TASK 5-6
// v.1
let weekday = prompt("с какого дня недeли начинется месяц");
let month = prompt("введите название месяца");
let countDaysInMonth;
let numberWeek;
switch (weekday.toLocaleLowerCase()) {
  case "понедельник":
    numberWeek = 1;
    break;
  case "вторник":
    numberWeek = 2;
    break;
  case "среда":
    numberWeek = 3;
    break;
  case "четверг":
    numberWeek = 4;
    break;
  case "пятница":
    numberWeek = 5;
    break;
  case "суббота":
    numberWeek = 6;
    break;
  case "воскесенье":
    numberWeek = 7;
    break;
  default:
    alert("неверно указан день недели");
    break;
}
switch (month) {
  case "январь":
  case "март":
  case "май":
  case "июль":
  case "август":
  case "октябрь":
  case "декабрь":
    countDaysInMonth = 31;
    break;
  case "апрель":
  case "июнь":
  case "сентябрь":
  case "ноябрь":
    countDaysInMonth = 30;
    break;
  case "февраль":
    countDaysInMonth = 28;
    break;
  default:
    alert("неверно указан месяц");
    break;
}

console.log(`отчетные дни в ${month}:`);
let day = 1;
for (let i = 1; i <= countDaysInMonth; i++) {
  if (numberWeek % 5 === 0) {
    console.log(day);
  }
  day++;
  numberWeek++;
  if (numberWeek > 7) {
    numberWeek -= 7;
  }
}

// v.2 (conditions simplified)
let firstFriday = Number(prompt("номер первой пятницы месяца"));
while (firstFriday <= 31) {
  console.log(
    `Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`
  );
  firstFriday += 7;
}

// TASK 6-8
// v.1
function seasons() {
  let input = prompt("Введите номер месяца");
  if (input === "1" || input === "2" || input === "12") {
    return "Зима";
  } else if (input === "3" || input === "4" || input === "5") {
    return "Весна";
  } else if (input === "6" || input === "7" || input === "8") {
    return "Лето";
  } else if (input === "9" || input === "10" || input === "11") {
    return "Осень";
  } else {
    return "недопустимое значение";
  }
}
console.log(seasons());

// v.2
function seasons() {
  let input = prompt("Введите номер месяца");
  switch (input) {
    case "1":
    case "2":
    case "12":
      return "Зима";
      break;
    case "3":
    case "4":
    case "5":
      return "Весна";
      break;
    case "6":
    case "7":
    case "8":
      return "Лето";
      break;
    case "9":
    case "10":
    case "11":
      return "Осень";
      break;
    default:
      return "недопустимое значение";
      break;
  }
}
console.log(seasons());

// TASK 7-4
let array = new Array();
for (let i = 0; i < 3; i++) {
  array[i] = new Array();
  for (let j = 0; j < 3; j++) {
    array[i][j] = 1;
  }
}
console.log(array);

// TASK 7-5
let arr12 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
  arr12.push(2);
}
console.log(arr12);

// TASK 7-6
const arr6 = [9, 8, 7, "a", 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

// TASK 7-7
const arr = [9, 8, 7, 6, 5];
let input = Number(prompt("угадайте число"));
if (arr.includes(input)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

// TASK 7-8
let s = "abcdef";
let sm = s.split("").reverse();
s = sm.join("");
console.log(s);

// TASK 7-9
// v.1
let arr11 = [
  [1, 2, 3],
  [4, 5, 6],
];
let arr22 = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr11[i].length; j++) {
    arr2.push(arr1[i][j]);
  }
}
console.log(arr22);

// v.2
let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
// let arr2 = [...arr1[0],...arr1[1]];
let arr2 = [...arr1[0]];
for (let i = 1; i < arr1.length; i++) {
  let arr3 = arr2.concat(...arr1[i]);
  arr2 = arr3;
}
console.log(arr2);

// TASK 7-10
let array10 = [1, 10, 3, 4, 7, 8, 5];

for (let index = 0; index < array10.length - 1; index++) {
  console.log(array10[index] + array10[index + 1]);
}

// TASK 7-11
const array11 = ["20, 10, 3, 4, 7, 8, 5"];

const newArray11 = array11.map((el) => el ** 2);

console.log(newArray11);

// TASK 7-12
const array12 = ["country", "avenue", "temperature", "city"];

const wordLength = array12.map((el) => el.split("").length);

console.log(wordLength);

// TASK 7-13
const array13 = [20, -10, 3, -4, 7, -8, 5];
const newArray13 = array13.filter((el) => {
  return el < 0;
});

console.log(newArray13);

// TASK 7-14
const array14 = Array();
for (let i = 0; i < 10; i++) {
  array14.push(Math.floor(Math.random() * 10));
}
console.log(array14);

const evenNumbers = array14.filter((el) => {
  if (el % 2 === 0) {
    return el;
  }
});
console.log(evenNumbers);

// TASK 7-15
const array15 = Array();
let count;
for (let i = 0; i < 6; i++) {
  array15.push(Math.floor(Math.random() * 10));
}
console.log(array15);

const average =
  array15.reduce((total, number) => total + number) / array15.length;
console.log(average);
