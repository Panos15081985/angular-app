export interface User {
    givenName: String,
    surName: String,
    email: String,
    password: String
}

export interface Credentials{
    email: string,
    password: string
}

export interface LoggedInUser{
    fullname: string,
    email:string
}