// 1. Interface: defines a contract.
interface Printable {
  printDetails(): void;
}

// 2. Class and encapsulation: data and methods are grouped together.
class Person implements Printable {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public introduce(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }

  public getAge(): number {
    return this.age;
  }

  public printDetails(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// 3. Inheritance: Student receives the features of Person.
class Student extends Person {
  public course: string;

  constructor(name: string, age: number, course: string) {
    super(name, age);
    this.course = course;
  }

  // 4. Polymorphism through method overriding.
  override introduce(): void {
    super.introduce();
    console.log(`I am studying ${this.course}.`);
  }
}

// 5. Abstraction: an abstract class cannot be instantiated directly.
abstract class Shape {
  abstract calculateArea(): number;

  displayArea(): void {
    console.log(`Area: ${this.calculateArea()}`);
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

function demonstrateOOP(): void {
  // Creating objects using the new keyword.
  const person = new Person("Dheena", 25);
  person.introduce();
  person.printDetails();
  console.log(`Age accessed through a method: ${person.getAge()}`);

  const student = new Student("Alex", 20, "TypeScript");
  student.introduce();
  student.printDetails();

  const rectangle = new Rectangle(5, 4);
  rectangle.displayArea();
}

demonstrateOOP();