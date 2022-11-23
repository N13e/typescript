const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 5e10

const message: string = 'Hello typescript'

const numberArray: number[] = [1, 1, 2, 4, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 4, 5, 8, 13]

const words: string[] = ['Hello', 'typescript']

//Tuple
const concat: [string, number] = ['Valera', 12345]

//Any
let variable: any = 42
// ...
variable = 'New String'
variable = []


//=====
function sayMyName(name: string): void {
    console.log(name)

}

sayMyName('Valera')


//Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

//Type
type Login = string

const login: Login = 'user1'
//const login2: Login = 2

type ID = string | number
const id1: ID = 1
const id2: ID = 'str'
// const id3: ID = true

type SomeType = string | number | undefined
