// no 'use strict'
console.log(this) // выводит window ссылаясь на окружение документа

function test() {
  console.log(this) // выводит window такой же как и просто вызов в примере выше
}
test()

const test1 = () => this
console.log(test1()) // выводит window ссылаясь на окружение документа