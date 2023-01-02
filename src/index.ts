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
function saySomeContent(name: string, content: string) {
    return name + content;
};



//----------Arrow Function----------
const saySomething = (name: string, str: string): string => {
    return name + str;
};



//----------unknown----------
type Data = {
    "userId": number;
    "id": number;
    "title": string;
    "completed": boolean;
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json() as Data;
    console.log(data);
};


const data1: Data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};

//if data1 is dynamic
type Beta = {
    name: string;
}
const Beta = data1 as unknown as Beta;



//----------Class----------
// private
// public
// protected

class Live {
    public roomName: string
    private id: string
    protected name: string

    constructor(roomName: string, id: string, name: string) {
        this.roomName = roomName;
        this.id = id;
        this.name = name;
    }
}
const live1 = new Live('No.01', '0001', 'Alan');
console.log(live1);

class CarLive extends Live {
    constructor(roomName: string, id: string, name: string) {
        super(roomName, id, name)
    }

    start() {
        super.roomName;
    }
}

interface CarProps {
    name: string;
    age: number;
    start: () => void;
}

class Car implements CarProps {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    start() { }
}



//----------Generic----------
function print<T>(data: T) {
    console.log('data', data);
};

print<number>(999);
print<string>('Alan');
print<boolean>(true);

class Print<T> {
    data: T;
    constructor(d: T) {
        this.data = d;
    }
};

const p = new Print<string>('Alan');
const p1 = new Print<number>(999);
console.log('p', p);
console.log('p1', p1);