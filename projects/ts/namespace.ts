namespace beauty{
  export class Animal{
    public name: string;
    public age: number;
    public spark: string;
    constructor(name: string, age: number, spark: string) {
      this.name = name;
      this.age = age;
      this.spark = spark;
    }
    public say() {
      console.log('hello, ' , this.name);
    }
  };
}

namespace beautiful{
  export class Animal{
    public name: string;
    public age: number;
    public spark: string;
    constructor(name: string, age: number, spark: string) {
      this.name = name;
      this.age = age;
      this.spark = spark;
    }
    public say() {
      console.log('hello, ' , this.name);
    }
  };
}

let bird: beauty.Animal = new beauty.Animal('a', 15, 'y');
let cat: beautiful.Animal = new beautiful.Animal('b', 15, 'y');
bird.say();
cat.say();

export {}