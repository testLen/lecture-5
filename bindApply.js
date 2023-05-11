const getRandomFromRange = (n,m) => {
    return Math.floor(
      Math.random()*(m-n+1)
      )+n;
}

const data = [
    {name:"Samantha", age:12},
    {name:"Alexis", age:14}
]

const user = {
    data: [
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData: function () {
        const randomNum = getRandomFromRange(0, this.data.length - 1); // Любое число с 0 до 1
        const { name, age } = this.data[randomNum];
        console.log (`${name} ${age}`);
    }
}

// call, apply ВЫЗЫВАЮТ ФУНКЦИЮ
// user.showData.call(user);
// user.showData.apply(user);

// bind возвращает обёртку функции
// user.showData.bind(user);


// КОГДА МОЖЕТ ПОНАДОБИТЬСЯ bind
// БУДЕТ ОШИБКА, ПОТЕРЯЛИ this обращается к глобальному объекту window
// const showDataVar = user.showData;
// showDataVar();

// когда нужно записать функцию
// ПОЧИНИЛИ
// const showDataVar = user.showData.bind(user);
// showDataVar ();


// ЧАСТИЧНОЕ ПРИМЕНЕНИЕ
// function mul(a, b) {
//     return a * b;
// }
  
// let double = mul.bind(null, 2);

// const mulPart = (a) => {
//     return (b) => {
//         return a * b;
//     }
// }

// function mulPart(a) {
//     return function(b) {
//         return a * b;
//     }
// }
// const triple = mulPart(3);
// console.log(triple(2));
// console.log(triple(3));
// console.log(triple(4));

// console.log(double(3));
// console.log(double(4));
// console.log(double(5));


// БЕЗ bind ВСПОМНИТЬ ЗАМЫКАНИЯ ПРОВЕСТИ АНАЛОГИЮ
// НЕ ПОВТОРЯЮСЬ ЛИ ?
// function partial(func, ...argsBound) {
//     return function(...args) { // (*)
//       return func.call(this, ...argsBound, ...args);
//     }
// }
// let user = {
//     firstName: "John",
//     say(time, phrase) {
//       alert(`[${time}] ${this.firstName}: ${phrase}!`);
//     }
// };
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
// user.sayNow("Hello");


// ОГРАНИЧЕНИЕ
// если несколько раз применить bind - результат не изменится,
// повторное применение bind не меняет контекст


// МОЖЕТ БЫТЬ КАК ДОМАШКА
// ЧАСТИЧНОЕ ПРИМЕНЕНИЕ (КАРИРОВАНИЕ) С bind
// ФУНКЦИЯ, КОТОРАЯ РЕАЛИЗУЕТ ОБЩЕЕ ПОВЕДЕНИЕ
// function greet (gender, age, name) {
//     const salutation = gender === "male" ? "Mr. " : "Ms. ";
//     return (age > 25)
//         ? `Hello, ${salutation} ${name}.`
//         : `Hey, ${name}.`;
// }

// ДЕЛАЕМ ЧАСТНЫЕ СЛУЧАИ ФУНКЦИИ
// const greetAnAdultMale = greet.bind(null, "male", 45);
// const greetAYoungster = greet.bind(null, "", 16);

// ВЫЗЫВАЕМ ФУНКЦИИ
// console.log(greetAnAdultMale("John Hartlove"));
// console.log(greetAYoungster("Alex"));
// console.log(greetAYoungster("Emma Waterloo"));


// function avg(arrayOfScores) {
//     const sumOfScores = arrayOfScores.reduce ((prev, cur) => prev + cur);
//     this.avgScore = sumOfScores / arrayOfScores.length;
// }

// const gameController = {
//     scores: [20, 34, 55, 46, 77],
//     avgScore: null
// };

// ПРОСТО ПРИ ВЫЗОВЕ ЗАПИШЕТ ЭТО В ГЛОБАЛЬНЫЙ ОБЪЕКТ 
// avg(gameController.scores);
// console.log(this.avgScore);
// console.log(gameController.avgScore);

// С ПОМОЩЬЮ call МОЖЕМ ВЫЗВАТЬ НА ТОМ ОБЪЕКТЕ ЧТО НУЖНО
// МЫ ВЗЯЛИ МЕТОД И ПРИМЕНИЛИ ЕГО НА ОБЪЕКТЕ, НЕ ДОБАВЛЯЯ МЕТОД САМОМУ ОБЪЕКТУ
// avg.call(gameController, gameController.scores);
// console.log(gameController.avgScore);
// console.log('avg' in gameController);


// ОДАЛЖИВАНИЕ МЕТОДОВ
// arguments - псевдомассив и методов массива не имеет
// но с помощью call или apply мы можем их одолжить
// function doSomething () {
//     const args = Array.prototype.slice.call(arguments, 2);
//     console.log (args);
// }
// doSomething ("Water", "Salt", "Glue");