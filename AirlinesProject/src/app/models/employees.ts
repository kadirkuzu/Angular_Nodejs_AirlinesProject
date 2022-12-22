export interface Pilot{
    id:string
    crewCount:number
    yearStarted:number
    salary:number
    email:string
    dob:Date
    name:string
    phone:string
    nationality:string
}
export interface CabinPersonel{
    id:string
    crewId:string
    salary:number
    email:string
    dob:Date
    name:string
    phone:string
    nationality:string
}
export interface GroundServiceChief{
    id:string
    crewCount:number
    yearStarted:number
    salary:number
    email:string
    dob:Date
    name:string
    phone:string
    nationality:string
}
export interface GroundServicePersonel{
    id:string
    crewId:string
    salary:number
    email:string
    dob:Date
    name:string
    phone:string
    nationality:string
}