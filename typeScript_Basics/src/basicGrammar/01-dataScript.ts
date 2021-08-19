// 原始类型
let bool: boolean = true
let num: number | undefined | null = null
let str: string = 'abc'


// 数组
let array1: number[] = [1, 2]
let array2: Array<number> = [1, 2]
let array3: Array<number | String> = [1, 2, '2']


// 元组
let tuple: [string, number, null] = ['1', 2, null]


// 函数
let add = (x: number, y: number) => x + y
let comput: (x: number, y: number) => number
comput = (a, b) => a + b


// 对象
let obj: {a: number, b: number} = {a: 1, b: 2}


// symbol
let sym: symbol = Symbol()
let sym2 = Symbol()
sym = sym2
// console.log(sym == sym2);


// undefined, null
let nu: null = null
let un: undefined = undefined


// void
let noReturn = (): void => {}


// any
let any: any
any = 1
any = 2
any = {}
any = () => {}


// never
let error = (): never => {
  throw new Error('error')
}

let endLess = (): never => {
  while(true) {
  }
}



