// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const { name, age, hobby, premium } = user;

function scriptForUser(){
    Object.assign(user, { mood: 'happy' });
    for (const value in user) {
        if (value === 'hobby') {
            user[value] = "skydiving";
        };
        if (value === 'premium') {
            user[value] = false;
        };
    }    
    for (let key in user) {
        console.log(`${key}: ${user[key]}`);
    }
    // console.log(user)
}
scriptForUser()









// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число - кількість властивостей.

const countProps = function (obj) {
    const numValues = Object.values(obj);
    const sum = numValues.length;
    return (`there are ${sum} values`)
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3




// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const findBestEmployee = function (employees) {
    const arrOfKeys = Object.keys(employees);
    const arrOfValues = Object.values(employees);
    const indexOfEmployee = arrOfValues.indexOf(Math.max(...arrOfValues));
    return (arrOfKeys[indexOfEmployee]);
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux




// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = function (employees) {
    const arrOfValues = Object.values(employees);
    let start = 0;
    // return (arrOfValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    for (let i = 0; i < arrOfValues.length; i++) {
        const element = arrOfValues[i];
        start += element;
        
    }
    return start
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400




// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
//   ];

// const getAllPropValues = function (arr, prop) {
//     let resultArr = []
//     // console.log(arr, prop)
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element[prop]){
//             resultArr.push(element[prop]);
            
//         } else {
//             return []
//         };
//     };
//     return resultArr 
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []



// авдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];


const calculateTotalPrice = function (allProdcuts, productName) {
    // console.log(allProdcuts, productName)

    for (let i = 0; i < allProdcuts.length; i++) {
        const element = allProdcuts[i];
        // console.log(element[productName])
        if (element.name === productName){
            return element.price * element.quantity 
        }
    }    
    return "такого значення немає"

};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800




// Завдання 7
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const transactonObj = {
      sum: amount,
      typeee: type,
    }
    const { sum, typeee } = transactonObj;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount
    this.createTransaction(amount, "deposit")
    this.transactions.push(transactonObj)
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance > amount || this.balance === amount) {
      this.balance -= amount;
      this.createTransaction(amount, "withdraw");
      this.transactions.push(transactonObj);
    }
    else {
      console.log(alert("Зняття такої суми не можливо, недостатньо коштів."))
    }
    
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return `Your balance is ${this.balance}`
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    const index = id - 1;
    return this.transactions[index];
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let toReturn = []
    for (let i = 0; i < this.transactions.length; i++) {
      const element = this.transactions[i];
      if (element.typeee === `${type}`) {
        let result = toReturn.push(element)
      };
    };
    return result;
  }
}