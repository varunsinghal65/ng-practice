export interface Passenger {
    id: number,
    name: string,
    checkedIn : boolean,
    children : Child[] | null
}

export interface Child {
    id : number,
    age : number
}