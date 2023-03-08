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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlCQUF5Qjs7Ozs7Ozs7OztBQUV6QixLQUFLO0FBQ0wsTUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFBO0FBQzFCLE1BQU0sR0FBRyxHQUFXLEdBQUcsQ0FBQTtBQUN2QixNQUFNLEdBQUcsR0FBWSxJQUFJLENBQUE7QUFDekIsTUFBTSxDQUFDLEdBQVMsSUFBSSxDQUFBO0FBQ3BCLE1BQU0sRUFBRSxHQUFjLFNBQVMsQ0FBQTtBQUUvQixLQUFLO0FBQ0wsTUFBTSxHQUFHLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDaEMsTUFBTSxJQUFJLEdBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBRXZDLEtBQUs7QUFDTCxNQUFNLEtBQUssR0FBOEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3ZELE1BQU0sTUFBTSxHQUF1QixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFJL0MsNEJBQTRCO0FBQzVCLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNmLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQTtBQUk5QiwwQkFBMEI7QUFDMUIsSUFBSSxHQUFvQixDQUFBO0FBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUE7QUFDVCxHQUFHLEdBQUcsTUFBTSxDQUFBO0FBT1osSUFBSSxFQUFFLEdBQU0sTUFBTSxDQUFBO0FBQ2xCLElBQUksRUFBRSxHQUFNLEdBQUcsQ0FBQTtBQW9CZixNQUFNLE1BQU0sR0FBUztJQUNuQixJQUFJLEVBQUUsTUFBTTtJ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