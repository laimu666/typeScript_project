// 函数定义
function compute(x: number, y: number): number {
  return x + y
}

let compute2 = (x: number, y: number): number => x + y

let compute3: (x: number, y: number) => number

type Compute4 = (x: number, y: number) => number

interface Compute5 {
  (x: number, y: number): number
}

console.log(compute(1, 2))
console.log(compute2(1, 2))
compute3 = (x, y) => x + y
console.log(compute3(1, 2))
let compute4: Compute4 = (x, y) => x + y
console.log(compute4(1, 2))
let compute5: Compute5 = (x, y) => x + y
console.log(compute5(1, 2))

// 函数传参可传
function compute6(x: number, y?: number) {
  return y ? x + y : x
}
console.log(compute6(3, 4)); // 7
console.log(compute6(3)); // 3


// 函数传参默认值
function compute7(x: number, y: number, z: number = 1, w: number = 1) {
  return x + y + z + w
}

console.log(compute7(1 ,2 , undefined, 2));


function compute8(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => {
    return pre + cur
  })
}

console.log(compute8(1, 2, 3, 4, 5));


// 函数重载
function compute9(...rest: number[]): number
function compute9(...rest: string[]): string
function compute9(...rest: any[]) {
  let first = rest[0];
  if (typeof first === 'number') {
      return rest.reduce((pre, cur) => pre + cur);
  }
  if (typeof first === 'string') {
      return rest.join('');
  }
}

console.log(compute9(1, 2, 3));
console.log(compute9('1', '2', '3'));