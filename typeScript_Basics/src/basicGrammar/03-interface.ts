interface List {
  readonly id: number,
  name: string,
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    if (value.age) {
      console.log(value.age);
    }
  })
}

let result = {
  data: [
    {id: 1, name: 'a', sex: 'male'},
    {id: 2, name: 'b', age: 18}
  ]
}

render(result)

interface stringArray {
  [index: number]: string | number
}

let arr: stringArray = ['1', '2', 3]

interface Names {
  [x: string]: any,
  [z: number]: string
}

let nam: Names = {
  name: 123,
  1: '123'
}


interface Add {
  (x: number, y: number): number
}

let add1: Add = (a, b) => a + b

console.log(add1(1, 2))