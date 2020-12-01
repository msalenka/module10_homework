let array = [7, 20, 99, 1]
array.forEach(array => console.log(array)
);

console.log(array.length);


// or

let array = [7, 20, 99, 1]
array.forEach(function (item, index, array) { console.log(item) });

// Оба этих варианта идентичны. Задание выполнено не до конца, по условию нужно было вывести не только элементы массива, но и его длину. Длину можно узнать с помощью свойства length. Выше дописала