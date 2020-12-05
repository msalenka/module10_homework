// Задание 3.

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


let str = 'Привет!';

str = str.split("").reverse().join("");
console.log(str)