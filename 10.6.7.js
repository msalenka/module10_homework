// Задание 7.

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

const array = [6, 0, 7, 13, 96, 105, 107, "", "hello"]
let zero = 0;
let oddNumbers = 0;
let evenNumber = 0;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
        if (array[i] === 0) { zero++ }
        else if (array[i] % 2 === 0 && array[i] !== 0 && array[i] !== "") { evenNumber++ }
        else if (array[i] % 2 !== 0 && array[i] !== "") {oddNumbers++}
    }
}
console.log(`Number of zero is ${zero}`);
console.log(`Number of odd numbers is ${oddNumbers}`);
console.log(`Number of even numbers is ${evenNumber}`);

// // Задача решена верно. Но условия в цикле можно чуть упростить. 
// В каждом из условий у вас повторяется вот эта часть: typeof array[i] === "number" && !isNaN(array[i]).
// Чтобы не писать несколько раз одно и то же, лучше вынести эту проверку в отдельное условие, а оставшиеся условия перенести внутрь.Так код будет и более читабельным.
// Выше исправила