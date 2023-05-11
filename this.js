// ИСПОЛЬЗОВАНИЕ THIS В ОБЪЕКТЕ. ДОСТУП К ИНФОРМАЦИИ ВНУТРИ ОБЪЕКТА
// const user = {
//     name: "John",
//     age: 30,
//     logHi() {
//         console.log(this.name + ' say: Hi!');
//     }
// };
// console.log(user.logHi());



// THIS УКАЗЫВАЕТ НА ОБЪЕКТ ПЕРЕД ТОЧКОЙ
// function sayMyName() {
//     console.log(this.name);
// }
// sayMyName();
// name = 'Best';
// sayMyName();



// // ИСПОЛЬЗОВАНИЕ THIS В ФУНКЦИИ С ДИНАМИЧЕСКОЙ ЗАМЕНОЙ ОБЪЕКТА
// const user = { name: "John" };
// const admin = { name: "Admin" };
// user.sayMyName = sayMyName;
// admin.sayMyName = sayMyName;
// // МЫ СОЗДАЕМ НОВЫЙ МЕТОД НА ОБЪЕКТЕ
// user.sayMyName();
// admin.sayMyName();



// ЗАДАНИЕ
// напишите объект calculator, у которого есть свойства val1, val2 (со значением 0 изначально)
// методы:
// setValues - принимает 2 значения и устанавливает их в val1 и val2;
// sum - суммирует val1 и val2, и выводит в консоль значение суммы
// multiple - перемножает val1 и val2, и выводит в консоль значение умножения

function Calculator() {
    this.val1 = 0;
    this.val2 = 0;
    this.sum = () => {
        return this.val1 + this.val2;
    }
    this.multiple = () => {
        return this.val1 * this.val2;
    }
    this.setValues = ({ val1, val2 }) => {
        this.val1 = val1;
        this.val2 = val2;
    }
}

const calc = new Calculator();
console.log(calc.sum());
console.log(calc.multiple());
calc.setValues({val1: 2, val2: 4});
console.log(calc.multiple());