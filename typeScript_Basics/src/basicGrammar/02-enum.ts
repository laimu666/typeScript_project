// 数字枚举
enum Role {
  one = 1,
  two,
  three,
  four,
  five
}
console.log(Role.one); // 1
console.log(Role[2]); // two


// 字符串枚举
enum Message {
  success = '成功',
  fail = '失败'
}
console.log(Message.success); // 成功


// 异构枚举
enum Answer {
  N,
  Y = 'yes'
}
console.log(Answer.Y);  // yes
console.log(Answer.N);  // 0
console.log(Answer[0]); // N


// 枚举成员
enum Char {
  // const member
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member
  d = Math.random(),
  e = '123'.length
}
console.log(Char.e);  // 3
console.log(Char.b);  // 0


// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 2
}
let month = [Month.Jan, Month.Feb, Month.Mar, Month.Apr]
console.log(month);


// 枚举类型
enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

let e: E = 3
let f: F = 3
// console.log(e === f);

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2)
console.log(e1 === e3)

let g1: G = G.a
let g2: G.a = G.a
