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
const aryMap = (ary) => (ary.map(item => console.log(item)));
// API 01
const URL01 = 'https://randomuser.me/api/';
~(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(URL01);
        const data = yield res.json();
        const { email, phone } = data.results[0];
        // console.log({ email, phone })
    }
    catch (err) {
        throw err;
    }
}))();
// API 02
const URL02 = 'https://official-joke-api.appspot.com/random_joke';
~(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(URL02);
        const data = yield res.json();
        const { setup, punchline, id } = data;
        // console.log({ setup, punchline, id })
    }
    catch (err) {
        throw err;
    }
}))();
// API 03
const URL03 = 'https://api.publicapis.org/entries';
;
~(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(URL03);
        const data = yield res.json();
        // return aryMap(data.entries)
    }
    catch (err) {
        throw err;
    }
}))();
// API 04
const URL04 = 'https://api.nationalize.io?name=nathaniel';
~(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(URL04);
        const data = yield res.json();
        // return aryMap(data.country)
    }
    catch (err) {
        throw err;
    }
}))();
// API 05
const URL05 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
~(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(URL05);
        const data = yield res.json();
        return aryMap(data.data);
    }
    catch (err) {
        throw err;
    }
}))();
