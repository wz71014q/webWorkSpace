// 类的修饰符：public, protected, private, readonly
// class person {
//   public readonly sex: string
//   protected name: string
//   private age: number
//   public constructor(sex: string = 'female', name: string, age: number) {
//     this.name =  name;
//     this.age = age;
//     this.sex = sex;
//   }
//   public say() {
//     console.log('hello world');
//   }
// }

// let ali: person = new person('female', 'ailce', 15);
// ali.say();

// 继承与重写
class Animal{
  public name: string
  public age: number
  public spark: string
  constructor(name: string, age: number, spark: string) {
    this.name = name;
    this.age = age;
    this.spark = spark;
  }
  public say() {
    console.log('hello ts');
  }
}

let cat:Animal = new Animal('Tom', 10, 'hello');
cat.say();

class Bird extends Animal{
  public fly: boolean
  constructor(name: string, age: number, spark: string, fly: boolean) {
    super(name, age, spark);
    this.fly = fly;
  }
  public canfly() {
    console.log('I can fly');
  }
  // 重写
  public say() {
    super.say();
    console.log('jiujiujiu');
  }
}
let suy:Bird = new Bird('suy', 15, 'za', true);
suy.canfly();
suy.say();