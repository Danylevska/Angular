typeof {} === "object"; 


interface UserI {}
interface IUser {}

export interface UserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: AdressInterface;
    company: CompanyIntreface;
}
 
export interface AdressInterface {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoInterface;
}
 
export interface GeoInterface {
    lat: number;
    lng: number;
}
 
export interface CompanyIntreface {
    name: string;
    catchPhrase: string;
    bs: string;
}









// interface AInterface {
//     a: number
// }

// interface BInterface extends AInterface {
//     b: number,
//    // metod: () => string
//    //metod: () => {name: string}
//    // metod: () => null
//    // metod: (a: number, b: string, c: string) => null
//     //metod: (a:{name: number, age: number}) => null
//     metod: (a: AInterface, b: boolean) => null
// }

// type AType = {

// a: number,
// b: number[],

// }


// function fn<T>(a: T): AType {
//     return {a:1, b: [1,2,3]}
// }

// fn<AInterface>({a: 10});

// function fn1<T, ReturnType>(a: T): ReturnType {
//     return {a:1} as ReturnType
// }

// fn1<AInterface, {name: string}> ({a: 10});


// function a () {}
// const A = function () {}


// type PassType = {
//     password: string
// }

// type EmailType = {
//     email: string
// }

// type AuthType = PassType & EmailType;

// const data: AuthType = {
//     email: "fjfdjfdkjfdkjf",
//     password: "sqsqsqsq"
// }

// function abc(): AuthType {
//     return data;
// }

// const dataFromReturn = abc();





// type Auth = {
//     amail: string,
//     password : string
// }

// type RegisterT = Auth & {firstname: string, birthday: Date}
// type UserT = RegisterT & {token: string}

// const user: UserT = {

// }

// type UserType = AuthT | RegisterT










