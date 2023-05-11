const getRandomFromRange = (n,m) => {
    return Math.floor(
      Math.random()*(m-n+1)
      )+n;
}

class User {
    constructor(usersArr) {
        this.data = usersArr;
        // this.handleClick = this.handleClick.bind(this);
        // решит проблему, такой же приём используется в Реакт на классовых компонентах.
    }
    handleClick(event) {
        // в данном случае this - элемент, на котором произошло событие
        // пока не привязали контекст
        console.log('isEqual: ', event.target === this);
        const randomNum = getRandomFromRange(0, this.data.length - 1);
        const randomUser = this.data[randomNum];
        const inputEl = document.getElementById('nameHolder');
        inputEl.value = `${randomUser.name} ${randomUser.age}`
    }
    // стрелочная функция также решит проблему. Своего this нет, запоминает this на момент создания
    handleClickWithArrow = (event) => {
        const randomNum = getRandomFromRange(0, this.data.length - 1);
        // в данном случае this - элемент, на котором произошло событие
        console.log('isEqual: ', event.target === this);
        const randomUser = this.data[randomNum];
        const inputEl = document.getElementById('nameHolder');
        inputEl.value = `${randomUser.name} ${randomUser.age}`
    }
}

const user = new User([
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
]);

const btn = document.getElementById('btn');
// если вместо addEventListener использовать onclick - всё будет работать корректно
// btn.addEventListener('click', user.handleClick);
btn.addEventListener('click', user.handleClickWithArrow);