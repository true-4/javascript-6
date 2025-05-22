'use strict'

// 2
// console.log(this) // выводит window ссылаясь на окружение документа

// function test() {
//   console.log(this) // выводит undefined так как функция ничего не возвращает в своём Lexical Environment
// }
// test()

// const test1 = () => this
// console.log(test1()) // выводит window ссылаясь на окружение документа так как не имеет собственного this и обращается к this родителя

// ** Пример от Макса
// реализация 1 вариант
const x = x => x + 1; // объявляем стрелочную функцию передаём 1 параметр используем параметр и указываем условия выполнения
const y = y => y + 1; // объявляем стрелочную функцию передаём 1 параметр используем параметр и указываем условия выполнения
const z = z => z + 1; // объявляем стрелочную функцию передаём 1 параметр используем параметр и указываем условия выполнения

const result = x(y(z(3))) // записываем результат в result следующим образом 3+z=4 > 4+y=5 > 5+x=6   

console.log(result) // выводит результат 6

// реализация 2 вариант
const compose = (...rest) => { // объявляем стрелочную функцию с любым количеством параметров которые записываются в rest
  return (num) => { // возвращаем функцию с параметром 
    let res = num // объявляем переменную res счётчик которая будет хранить результат цикла в значении параметра num
    for (let i = rest.length - 1; i >= 0; i--) { // объявляем цикл который проходится по значениям rest в обратном порядке
      res = rest[i](res) // присаеваем в res результат введённы значений из rest и вызываем значение которое мы передаём
    }
    return res // возвращаем результат цикла которая присваевается в num
  }
}

const result1 = compose(x, y, z)(3) // записываем результат в result1 

console.log(result1) // выводит результат 6

// 3
function Calc() {
  this.result = 0 // устанавливаю значение по умолчанию
  this.add = num => this.result += num // сложение которое записывается в result
  this.subtract = num => this.result -= num // вычитание
  this.multiply = num => this.result *= num // умножение
  this.divide = num => this.result /= num // деление
  this.reset = () => this.result = 0 // сброс 
  this.getValue = () => this.result // возвращает актуальное значение в result
}

const useCalc = new Calc() // собираем конструктором функцию Calc

console.log(useCalc.result) // проверяю значение по умолчанию

useCalc.add(100) // передаём значение на сложение
console.log(useCalc.getValue()) // проверяем актуальное значение в result

useCalc.subtract(8) // передаём значение на вычитание 
console.log(useCalc.getValue())

useCalc.multiply(2) // передаём значение на умножение
console.log(useCalc.getValue())

useCalc.divide(4) // передаём значение на деление
console.log(useCalc.getValue())

useCalc.reset() // обнуляет результат присваивая 0
console.log(useCalc.getValue())