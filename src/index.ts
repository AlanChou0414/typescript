// -------- 基本類型 --------

// 型別
const str: string = 'Alan'
const num: number = 123
const boo: boolean = true
const n: null = null
const un: undefined = undefined

// 陣列
const ary: string[] = ['a', 'b']
const ary2: string[][] = [['aa', 'bb']]

// 元組
const tuple: [number, string, boolean] = [1, 'a', true]
const tuple2: [string, string][] = [['a', 'b']]



// -------- Enum 枚舉 --------

enum LiveStatus {
  SUCCESS = 0,
  FAIL = -1,
  STREAMING = 1
}

let staus = LiveStatus.SUCCESS



// -------- Union --------

let aaa: number | string
aaa = 123
aaa = 'Alan'



// -------- type --------

type A = number | string
let a1:A = 'Alan'
let a2:A = 123