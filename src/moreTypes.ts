let response: any = "42";

let numericLenght:number = (response as string).length //example of foreful type assertion 


type Book = {
    name: string
}

let bookString = '{"name: "who moved my cheese"}'; 

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject); 



const inputElement = document.getElementById("username") as HTMLInputElement


try {

} catch (error) {

    if(error instanceof Error) {
        console.log(error.message); 
    }

    console.log("erro", error); 
}


const data:unknown = "chai aur code";

const strData: string = data as string


type Role = "admin" | "user"  | "superadmin"

function redirectBasedonRole(role: Role): void {
    if(role == "admin") {
        console.log("redirecting to admin dashboard");
        return
    }

    if(role == "user") {
        console.log("Redirecting to user dashboard")
        return
    }

    role;
}