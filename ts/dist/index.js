"use strict";
// -------- 基本類型 --------
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 型別
const str = 'Alan';
const num = 123;
const boo = true;
const n = null;
const un = undefined;
// 陣列
const ary = ['a', 'b'];
const ary2 = [['aa', 'bb']];
// 元組
const tuple = [1, 'a', true];
const tuple2 = [['a', 'b']];
// -------- Enum 枚舉 --------
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
let staus = LiveStatus.SUCCESS;
// -------- Union --------
let aaa;
aaa = 123;
aaa = 'Alan';
let a1 = 'Alan';
let a2 = 123;
const user01 = {
    name: 'Alan',
    age: 27,
    sex: 'm',
    state: true,
    // 需補上擴充 不然會報錯
    like: 'movies'
};
const user02 = {
    name: 'Helen',
    age: 23,
    sex: 'f',
    state: false,
    like: 'dance'
    // 不需加上language
};
const obj = {
    name: 'card01',
    desc: 'date01'
};
// -------- function --------
// 參數
// function hello () {}
const func = () => { };
const sayHello = (user) => (console.log(`Hello ${user}`));
// 除非明確 不然不寫 =>
const sayHi = (user) => (`Hi ${user}`);
const autoMessage = (alert, user, stateCode) => (`${alert} ${user} server get stateCode : ${stateCode}`);
// -------- undefined --------
const test = (a) => (console.log(a));
const hello = (name, age, sex) => {
    if (age === undefined)
        return;
    test(age);
    return age;
};
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
        return data;
    }
    catch (err) {
        throw err;
    }
});
// 不可確定性的api格式 需使用斷言
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
// data1 是動態的？
const beta = data1;
// -------- 泛型 Generics --------
// 可以加入可變的類型
const printTest = (data) => (console.log(data));
printTest(123);
printTest('Alan');
printTest(false);
function print(data) {
    console.log(data);
}
// 可以使用對應類型
print(123);
print('Alan');
print(true);
// key value
const cats = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' }
};
const obj1 = {
    state: false,
};
const todo = {
    title: 'Clean room',
    completed: false,
};
const todoApp = {
    time: 20,
    state: false,
};
