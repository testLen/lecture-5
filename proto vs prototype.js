// СОЗДАНИЕ ПУСТОГО ОБЪЕКТА, БЕЗ СВОЙСТВ РОДИТЕЛЯ
// let noProto = Object.create(null);

// console.log(typeof noProto.__proto__);
// console.log(Object.getPrototypeOf(noProto));


// ХРАНЕНИЕ СВОЙСТВ И МЕТОДОВ
// свойства хранятся в инстансе (объекте), методы - в прототипе
class Employee {
    role = 'developer';
    workHard() {
        console.log('Work hard');
    }
}
const fred = new Employee();  
// console.log(fred.__proto__ === Employee.prototype);
// console.log('workHard in object fred: ', fred.hasOwnProperty('workHard'));
// console.log('workHard in prototype: ', Employee.prototype.hasOwnProperty('workHard'));
// console.log('role in object fred: ', fred.hasOwnProperty('role'));
// console.log('role in prototype: ', Employee.prototype.hasOwnProperty('role'));


// УСТАНОВКА ПРОТОТИПА
class Cow {}  
// Object.setPrototypeOf(fred, Cow);
// console.log(fred.__proto__);


// ЗАПЕРЩАЕМ НАСЛЕДОВАНИЕ
// const obj = {};
// Object.preventExtensions(obj);
// // Object.setPrototypeOf(obj, Cow); // ошибка, объект не расширяемый
// console.log(obj.__proto__);


// ДЕЛАЕМ СВОЮ ЦЕПОЧКУ ПРОТОТИПОВ
// const obj = {ownProperty: 1};
// console.log(obj.ownProperty);
// obj.__proto__ = {propertyOfProto: 2};
// console.log(obj.propertyOfProto);
// obj.__proto__.__proto__ = {propertyOfProtosProto: 3};
// console.log(obj.propertyOfProtosProto);

const obj1 = {a: 5};
const obj2 = {b: 6};
const obj3 = {c: 8};
// ПРОВЕРЯЕМ ЦЕПОЧКУ ПРОТОТИПОВ, КОТОРАЯ АВТОМАТИЧЕСКИ ПОЛУЧАЕТСЯ В JS
const obj = {};
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);



// ЗАДАНИЕ
// 1. постройте цепочку прототипов до тех пор, пока не дойдёте до ошибки
// 2. напишите 3 объекта и постройте из них цепочку прототипов