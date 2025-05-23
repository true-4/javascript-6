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
  this.result = 0; // устанавливаю значение по умолчанию
  this.add = num => {
      this.result += num // сложение которое записывается в result
      return this
    } 
  this.subtract = num => {
    this.result -= num; // вычитание
    return this // возвращает текущее значение
  }
  this.multiply = num => {
    this.result *= num; // умножение
    return this
  } 
  this.divide = num => {
    this.result /= num; // деление
    return this
  } 
  this.reset = () => {
    this.result = 0; // сброс 
    return this
  } 
  this.getValue = () => this.result; // возвращает актуальное значение в result
}

const useCalc = new Calc(); // собираем конструктором функцию Calc

console.log(useCalc.result)

const res = useCalc.add(5).multiply(2).subtract(4).divide(2).getValue()
console.log(res)

const res1 = useCalc.reset().getValue()
console.log(res1)

// 4
// 4.1
const strOrig = 'hello' // строка которую надо резвернуть
let strRev = '' // переменная в которую будет записываться мутированная строка

function reverseString() { // объявляем функцию для разворота строки
  for (let i = strOrig.length - 1; i >= 0; i--) { // проходимся по элементам строки в обратном порядке так как тип string итерируемый
    strRev += strOrig[i] // складываем результат полученный в результате цикла и присваеваем его в переменную для записи результата
  }
  return strRev // возвращаем результат цикла
}

console.log(reverseString()) // выводим в консоль функцию и вызываем её

// 4.2
const strNum = '12345'
let newStrNum = ''

function reverseStringNum() {
  for (let i = strNum.length - 1; i >= 0; i--) {
    newStrNum += strNum[i]
  }
  return newStrNum
}

console.log(reverseStringNum())

// 5
// 5.1
const strDef = 'hello'
let strFirstLiterUp = ''

function capitalizeFirst() {
  for (let i = 0; i < strDef.length; i++) {
    if (i === 0) {
      strFirstLiterUp += 'H'
    } else {
      strFirstLiterUp += strDef[i]
    }
  }
  return strFirstLiterUp
}

console.log(capitalizeFirst())

// 5.2 вопрос javascript > JavaScript
const origStr = 'javaScript'
let strFirstLiterUp2 = ''

function capitalizeFirst2() {
  for (let i = 0; i < origStr.length; i++) {
    if (i === 0) {
      strFirstLiterUp2 += 'J'
    } else {
      strFirstLiterUp2 += origStr[i]
    }
  }
  return strFirstLiterUp2
}

console.log(capitalizeFirst2())