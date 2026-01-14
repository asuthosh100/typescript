const chaiaFlavour: string[] = ["Masala", "Adrak"]

const chaiprice: number[] = [10,20]

const rating: Array<number> = [4.5, 5.0]


//Array of objects

type Chai = {
    name: string;
    price: number
}


const menu: Chai[] = [
    {name: "Masala", price: 1},
    {name: "Masaa", price: 2}
]


//multidimension array 

const table: number[][] = [
    [1,2,3], 
    [4,5,6]
]

//tuple 

let chaiTuple: [string, number]; 
chaiTuple = ["Masala", 20]


let userInfo: [string, number, boolean?]

userInfo = ["hitesh", 100 ]

enum CupSize {
    SMALL,
    MEDIUM, 
    LARGE
}

const size = CupSize.LARGE 
