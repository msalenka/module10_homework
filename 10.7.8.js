let keysAndValues = new Map()

keysAndValues.set(25, "abc");
keysAndValues.set("www", 123);
keysAndValues.set(78, "hoho");

for (let [key, value] of keysAndValues) {
    console.log (`Ключ - ${key}, значение - ${value}`)
}
