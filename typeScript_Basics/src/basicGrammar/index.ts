// 抽象类（无法创建抽象类的实例）
abstract class Animal {
  eat() {
    console.log('eat')
  }

  abstract sleep(): void
}

class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  public name: string
  private pri() {}
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bones'
  sleep() {
    console.log('Dog sleep')
  }
}

console.log(Dog.prototype);

let dog = new Dog('wang wang')
console.log(dog);
dog.sleep()
dog.eat()


