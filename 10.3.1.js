let number = +prompt("Введите число!");

if (isNaN(number)) {
    alert(number + " - это не является числом!")
}
else if (number === 0) {
    alert("Вы ввели 0! Введите число больше нуля.")
}
else if (number % 2 == 0) {
    alert(number + " - Вы ввели чётное число!")
}
else if (number % 2 != 0) {
    alert(number + " - Вы ввели нечётное число!")
}