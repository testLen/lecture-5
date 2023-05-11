// Создание сложной функциональности за счёт объединения более простых функций.
// В некотором смысле, композиция - это вложение функций, каждая из которых
// передает свой результат в качестве входных данных для другой функции.
const upperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} `.repeat(3);

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const withCompose = compose(
  repeat,
  exclaim,
  upperCase
)

// Без композиции это выглядело бы так
repeat(exclaim(upperCase("I love coding")))
// А если бы было больше функций – могло бы не поместиться в строку))

// В Ангуляре используется RxJs в котором также используется композиция - pipe
from([30, 41, 60])
  .pipe(
    filter((num) => num % 10 === 0),
    map((num) => num * 2)
  )
  .subscribe((vl) => console.log(vl));


// Композиция используется в Реакт как альтернатива наследованию
function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
}
// Здесь WelcomeDialog и FancyBorder - компоненты, по сути функции на стероидах
// в самой документации Реакт было сказано, что они не нашли случаев где нужно было бы
// Использовать наследование вместо композиции
