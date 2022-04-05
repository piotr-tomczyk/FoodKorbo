import { Dish } from "./dishes";

export interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    descripton?: string,
    isLogged?:boolean,
    dishes?: Dish[],
}
export let users: User[] = [
    {
        id: 1,
        username: 'Peyvir',
        email: 'Peyvir@gmail.com',
        password: 'peyvir',
        dishes: [
            {
                id: 1,
                name: "Spaghetti",
                description: "italian pog",
                isPublic: true
            },
            {
                id: 2,
                name: "Kiwi",
                description: "eat the bird",
                isPublic: false
            }
        ]
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