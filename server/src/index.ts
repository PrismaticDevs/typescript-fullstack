let email: string = "Matthew Brignola";
let age: number = 29;
let isDeveloper: boolean = true;
let x: any = "blah";
x = false;
let ids: number[] = [1, 2, 3, 4, 5];

// Tuple
let person: [number, string, boolean] = [1, "two", false];

// Union
let id: string | number;
id = "blah";
id = 7;

// Enum
enum D1 {
  up,
  down,
  left,
  right,
}

// Object
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "Hi",
};

// Type assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function add(x: number, y: number): number {
  return x + y;
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
}
const user1: UserInterface = {
  id: 1,
  name: "Hi",
};

interface MathF {
  (x: number, y: number): number;
}

const addFunc: MathF = (x: number, y: number): number => x + y;
const subFunc: MathF = (x: number, y: number): number => x - y;

// Classes
class Person {
  private id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const Matt = new Person(9, "Matt");
console.log(Matt.name);

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["tom", "tony", "bill"]);
