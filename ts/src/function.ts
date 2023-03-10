// Type
type HelloUserType = (user: string) => string
const helloUser: HelloUserType = (user) => (`${user} Hello~`)

type SumNumType = (a: number, b: number) => number
const sumNum: SumNumType = (a, b) => a + b



// interface
interface SumNumInterface {
  (a: number, b: number): number
}
const twoSum: SumNumInterface = (a, b) => a + b

interface HelloUserInterface {
  (user: string, str: string): string
}
const sayHelloUser: HelloUserInterface = (user, str) => (str + ' ' + user)



// Generics
const add = <T>(arg: T): T => arg
add<number>(12)
add<string>('Alan')
add<boolean>(false)

const addArray = <T extends any[]>(ary: T): T => ary
addArray<number[]>([1, 2, 3])
addArray<string[]>(['1', '2', '3'])
addArray<boolean[]>([true, false])

const addObject = <T extends Object>(obj: T): T => obj

interface PersonType {
  name: string
  age: number
  state?: boolean
}
const person: PersonType = { name: 'Alan', age: 27 }
addObject<PersonType>(person)