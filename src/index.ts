// ----------basic----------
const str = 'Alan';
let str1: string;
str1 = 'Helen';

const num = 1000;
const boo = true;
const n = null;
const un = undefined;

const test: any = true;



// Array
const arr: string[] = ['a', 'b'];
const arr2: string[][] = [['aa', 'bb']];



// Components
const tuple: [string, number, boolean] = ['Alan', 27, true];



// ----------Enum----------
enum api {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1,
}

const apiStatus = api.STREAMING;



// ----------Union----------
let aaa: number | string;
aaa = 1000;
aaa = 'str';



// ----------type----------
type A = number | string;
type B = boolean | number;
let a1: A;
a1 = '23';
a1 = 23;
let b1: B;
b1 = true;
b1 = 22;



// ----------interface----------
interface User {
    name: string;
    age: number;
    email?: string;
    status?: boolean;
};
interface User {
    password: string;
}

const obj2: User = {
    name: 'Helen',
    age: 23,
    password: '123456'
}



// ----------Object----------
type Card = {
    name: string;
    desc: string;
};
const obj: Card = {
    name: 'Alan',
    desc: '....',
};



//----------function----------
//parameter
function hello(a: number, b: number): number {
    return a + b;
};

const saySomething = (name: string, str: string): string => {
    return name + str;
}



