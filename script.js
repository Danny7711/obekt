// Задание 1: Создание объекта

const person = {
    name: "Дастан",
    age: 26,
    city: "Алматы"
};

console.log(person);


// Задание 2: Доступ к свойствам объекта

console.log(person.name);
console.log(person.age);

person.city = "Астана";

console.log(person);


// Задание 3: Методы объекта

person.greet = function() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`);
};

person.greet();


// Задание 4: Сравнение объектов

const obj1 = {
    a: 10,
    b: 20
};

const obj2 = {
    a: 10,
    b: 20
};

console.log(obj1 == obj2);   // false
console.log(obj1 === obj2);  // false



// Задание 5: Поверхностное копирование

const book = {
    title: "Гарри Поттер",
    author: "Дж. К. Роулинг",
    details: {
        year: 1997,
        pages: 300
    }
};

const bookCopy = Object.assign({}, book);

bookCopy.details.year = 2000;

console.log(book);
console.log(bookCopy);




// Задание 6: Методы объектов

const calculator = {
    a: 10,
    b: 5,

    sum: function() {
        return this.a + this.b;
    },

    multiply: function() {
        return this.a * this.b;
    }
};

console.log(calculator.sum());
console.log(calculator.multiply());


// Задание 7: const и изменение объекта

const car = {
    brand: "BMW",
    model: "M5"
};

car.model = "M4";

console.log(car);

