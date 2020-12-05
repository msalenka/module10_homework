// Задание 8.

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.


let keysAndValues = new Map()

keysAndValues.set(25, "abc");
keysAndValues.set("www", 123);
keysAndValues.set(78, "hoho");

for (let [key, value] of keysAndValues) {
    console.log (`Ключ - ${key}, значение - ${value}`)
}
