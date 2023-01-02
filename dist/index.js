"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ----------basic----------
const str = 'Alan';
let str1;
str1 = 'Helen';
const num = 1000;
const boo = true;
const n = null;
const un = undefined;
const test = true;
// Array
const arr = ['a', 'b'];
const arr2 = [['aa', 'bb']];
// Components
const tuple = ['Alan', 27, true];
// ----------Enum----------
var api;
(function (api) {
    api[api["SUCCESS"] = 0] = "SUCCESS";
    api[api["FAIL"] = -1] = "FAIL";
    api[api["STREAMING"] = 1] = "STREAMING";
})(api || (api = {}));
const apiStatus = api.STREAMING;
// ----------Union----------
let aaa;
aaa = 1000;
aaa = 'str';
let a1;
a1 = '23';
a1 = 23;
let b1;
b1 = true;
b1 = 22;
;
const obj2 = {
    name: 'Helen',
    age: 23,
    password: '123456'
};
const obj = {
    name: 'Alan',
    desc: '....',
};
//----------function----------
//parameter
function hello(a, b) {
    return a + b;
}
;
function saySomeContent(name, content) {
    return name + content;
}
;
//----------Arrow Function----------
const saySomething = (name, str) => {
    return name + str;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
        console.log(data);
    });
}
;
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
const Beta = data1;
//----------Class----------
// private
// public
// protected
class Live {
    constructor(roomName, id, name) {
        this.roomName = roomName;
        this.id = id;
        this.name = name;
    }
}
const live1 = new Live('No.01', '0001', 'Alan');
console.log(live1);
class CarLive extends Live {
    constructor(roomName, id, name) {
        super(roomName, id, name);
    }
    start() {
        super.roomName;
    }
}
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    start() { }
}
//----------Generic----------
function print(data) {
    console.log('data', data);
}
;
print(999);
print('Alan');
print(true);
class Print {
    constructor(d) {
        this.data = d;
    }
}
;
const p = new Print('Alan');
const p1 = new Print(999);
console.log('p', p);
console.log('p1', p1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDRCQUE0QjtBQUM1QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUM7QUFDbkIsSUFBSSxJQUFZLENBQUM7QUFDakIsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUVmLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDakIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2YsTUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBRXJCLE1BQU0sSUFBSSxHQUFRLElBQUksQ0FBQztBQUl2QixRQUFRO0FBQ1IsTUFBTSxHQUFHLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsTUFBTSxJQUFJLEdBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBSXhDLGFBQWE7QUFDYixNQUFNLEtBQUssR0FBOEIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBSTVELDJCQUEyQjtBQUMzQixJQUFLLEdBSUo7QUFKRCxXQUFLLEdBQUc7SUFDSixtQ0FBVyxDQUFBO0lBQ1gsOEJBQVMsQ0FBQTtJQUNULHVDQUFhLENBQUE7QUFDakIsQ0FBQyxFQUpJLEdBQUcsS0FBSCxHQUFHLFFBSVA7QUFFRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBSWhDLDRCQUE0QjtBQUM1QixJQUFJLEdBQW9CLENBQUM7QUFDekIsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNYLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFPWixJQUFJLEVBQUssQ0FBQztBQUNWLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDVixFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ1IsSUFBSSxFQUFLLENBQUM7QUFDVixFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ1YsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQVVQLENBQUM7QUFLRixNQUFNLElBQUksR0FBUztJQUNmLElBQUksRUFBRSxPQUFPO0lBQ2IsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFBO0FBU0QsTUFBTSxHQUFHLEdBQVM7SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxNQUFNO0NBQ2YsQ0FBQztBQUlGLDhCQUE4QjtBQUM5QixXQUFXO0FBQ1gsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFBQSxDQUFDO0FBQ0YsU0FBUyxjQUFjLENBQUMsSUFBWSxFQUFFLE9BQWU7SUFDakQsT0FBTyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQzFCLENBQUM7QUFBQSxDQUFDO0FBSUYsb0NBQW9DO0FBQ3BDLE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBVSxFQUFFO0lBQ3ZELE9BQU8sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFZRixTQUFlLE9BQU87O1FBQ2xCLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDeEUsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFVLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQUE7QUFBQSxDQUFDO0FBR0YsTUFBTSxLQUFLLEdBQVM7SUFDaEIsUUFBUSxFQUFFLENBQUM7SUFDWCxJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsV0FBVyxFQUFFLEtBQUs7Q0FDckIsQ0FBQztBQU1GLE1BQU0sSUFBSSxHQUFHLEtBQXdCLENBQUM7QUFJdEMsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVixTQUFTO0FBQ1QsWUFBWTtBQUVaLE1BQU0sSUFBSTtJQUtOLFlBQVksUUFBZ0IsRUFBRSxFQUFVLEVBQUUsSUFBWTtRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQUNELE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVuQixNQUFNLE9BQVEsU0FBUSxJQUFJO0lBQ3RCLFlBQVksUUFBZ0IsRUFBRSxFQUFVLEVBQUUsSUFBWTtRQUNsRCxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsS0FBSztRQUNELEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBUUQsTUFBTSxHQUFHO0lBSUwsWUFBWSxJQUFZLEVBQUUsR0FBVztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsS0FBSyxLQUFLLENBQUM7Q0FDZDtBQUlELDZCQUE2QjtBQUM3QixTQUFTLEtBQUssQ0FBSSxJQUFPO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsS0FBSyxDQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLEtBQUssQ0FBUyxNQUFNLENBQUMsQ0FBQztBQUN0QixLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7QUFFckIsTUFBTSxLQUFLO0lBRVAsWUFBWSxDQUFJO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFTLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDIn0=