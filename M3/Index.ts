// Ex1

function concat(str1: string, str2: string): string {
  return str1 + str2
}

console.log(concat('Hello ', 'World'));

// Ex2

type SimeArray = (string | number)[] 

interface MyHometask {
  howIDoIt: string,

  simeArray: SimeArray,

  withData: [{
    howIDoIt: string, 
    simeArray: SimeArray
  }]
}

const MyHometask: MyHometask = {

  howIDoIt: "I Do It Wel",

  simeArray: ["string one", "string two", 42],

  withData: [
    { 
      howIDoIt: "I Do It Wel", 
      simeArray: ["string one", 23] 
    }
  ],

}

// Ex3

interface MyArray<T> {

  [N: number]: T

  reduce<U>(fn: (accumulator: U, value: T) => U): U;
}


const myArrayNumber: Array<number> = [1,2,3]
const myArrayString: MyArray<string> = ['1','2','3']

console.log(myArrayNumber.reduce((a: number, b: number) => a + b));
console.log(myArrayString.reduce<string>((a: string, b: string) => a + b));
// Ex4

interface IHomeTask {

    data: string;

    numbericData: number;

    date: Date;

    externalData: {

        basis: number;

        value: string;

    }

}

const homeTask: MyPartial<IHomeTask> = {

  externalData: {
      value: 'win'

  }

}

type MyPartial<T> = {

  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]

}