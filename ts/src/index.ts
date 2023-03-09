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
// 不可擴充
type A = number | string
let a1: A = 'Alan'
let a2: A = 123



// -------- interface --------
// 可以擴充
interface User {
  name: string
  age: number
  sex: string
  state: boolean | number
}

// 擴充
interface User {
  like: string
  // '?' => 表示可不加
  language?: string
}

const user01: User = {
  name: 'Alan',
  age: 27,
  sex: 'm',
  state: true,
  // 需補上擴充 不然會報錯
  like: 'movies'
}

const user02: User = {
  name: 'Helen',
  age: 23,
  sex: 'f',
  state: false,
  like: 'dance'
  // 不需加上language
}



// -------- object --------
type Card = {
  name: string
  desc: string
}

const obj: Card = {
  name: 'card01',
  desc: 'date01'
}



// -------- function --------
// 參數
// function hello () {}
const func = () => { }

const sayHello = (user: string) => (
  console.log(`Hello ${user}`)
)

// 除非明確 不然不寫 =>
const sayHi = (user: string): string => (
  `Hi ${user}`
)

const autoMessage = (alert: string, user: string, stateCode: number) => (
  `${alert} ${user} server get stateCode : ${stateCode}`
)




// -------- undefined --------
const test = (a: number) => (
  console.log(a)
)

const hello = (name: string, age?: number, sex?: string) => {
  if (age === undefined) return
  test(age)
  return age
}




// -------- 斷言 unknown => as --------
// 設定可確定性的api格式
type Data = {
  userId: number
  id: number
  title: string
  completed: boolean
}
const getData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Data
    return data
  } catch (err) {
    throw err
  }
}

// 不可確定性的api格式 需使用斷言
const data1: Data = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
type Beta = {
  name: string
}
// data1 是動態的？
const beta = data1 as unknown as Beta




// -------- 泛型 Generics --------
// 可以加入可變的類型
const printTest = <T>(data: T) => (
  console.log(data)

)
printTest<number>(123)
printTest<string>('Alan')
printTest<boolean>(false)

function print<T>(data: T) {
  console.log(data)
}
// 可以使用對應類型
print<number>(123)
print<string>('Alan')
print<boolean>(true)




// -------- Utility --------
// Record
interface CatInfo {
  age: number
  breed: string
}
type CatName = 'miffy' | 'boris' | 'mordred'
// key value
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' }
}
const obj1: Record<string, boolean> = {
  state: false,
}


// Pick
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}


// Omit
interface TodoItem {
  todos: string
  time: number
  state: boolean
}

type TodoItemPreview = Omit<TodoItem, 'todos'>

const todoApp: TodoItemPreview = {
  time: 20,
  state: false,
}