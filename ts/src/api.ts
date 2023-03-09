// API 01
const URL01: string = 'https://randomuser.me/api/'
type UserDataType = {
  results: {
    email: string
    phone: string
  }[]
};
~(async () => {
  try {
    const res = await fetch(URL01)
    const data = await res.json() as UserDataType
    const { email, phone } = data.results[0]
    // console.log({ email, phone })
  } catch (err) {
    throw err
  }
})()


// API 02
const URL02: string = 'https://official-joke-api.appspot.com/random_joke'
type JokeDataType = {
  setup: string
  punchline: string
  id: number
};
~(async () => {
  try {
    const res = await fetch(URL02)
    const data = await res.json() as JokeDataType
    const { setup, punchline, id } = data
    // console.log({ setup, punchline, id });
  } catch (err) {
    throw err
  }
})()


// API 03
const URL03: string = 'https://api.publicapis.org/entries'
interface Entries {
  count: number
  entries: {
    API: string,
    Description: string,
    Auth: string,
    HTTPS: boolean,
    Cors: string,
    Link: string,
    Category: string
  }[]
};
const entriesMap = (ary: Entries['entries']) => (
  ary.map(item => console.log(item))
)
~(async () => {
  try {
    const res = await fetch(URL03)
    const data = await res.json() as Entries
    // return entriesMap(data.entries)
  } catch (err) {
    throw err
  }
})()


// API 04
const URL04: string = 'https://api.nationalize.io?name=nathaniel'
interface Country {
  country: {
    country_id: string
    probability: number
  }[]
}
const countryMap = (ary: Country['country']) => (
  ary.map(item => console.log(item))
)
~(async () => {
  try {
    const res = await fetch(URL04)
    const data = await res.json() as Country
    // return countryMap(data.country)
  } catch (err) {
    throw err
  }
})()


// API 05
const URL05: string = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
interface DataUSA {
  data: {
    "ID Nation": string
    Nation: string
    "ID Year": number
    Year: string
    Population: number
    "Slug Nation": string
  }[]
}
const DataUSAMap = (ary: DataUSA['data']) => (
  ary.map(item => console.log(item))
)
~(async () => {
  try {
    const res = await fetch(URL05)
    const data = await res.json()
    // return DataUSAMap(data.data)
  } catch (err) {
    throw err
  }
})()



