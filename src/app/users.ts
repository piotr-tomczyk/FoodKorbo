import { Dish } from "./dishes";

export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    descripton?: string,
    dishes?: Dish[],
}
export let users: User[] = [
    {
        id: 1,
        username: 'Peyvir',
        email: 'Peyvir@gmail.com',
        password: 'peyvir'
    },
    {
        id: 2,
        username: 'Akki',
        email: 'Akki@gmail.com',
        password: 'akki'
    },
    {
        id: 3,
        username: 'Hej',
        email: 'Hej@gmail.com',
        password: 'admin'
    },
]
export const addUser = (user:User) => {
    users.push(user);
}
export const getMaxID = () =>{
    return users.length + 1;
}