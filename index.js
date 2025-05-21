'use strict'

console.log(this) // выводит window ссылаясь на окружение документа

function test() {
  console.log(this) // выводит undefined так как функция ничего не возвращает в своём Lexical Environment
}
test()

const test1 = () => this
console.log(test1()) // выводит window ссылаясь на окружение документа так как не имеет собственного this и обращается к this родителя