interface Person1{
    aa:string
    bb:number
}
interface Person2{
    cc:number
}
type Allperson=Person1|Person2

let fi:Allperson={
    aa:'111',
    bb:1,
    cc:11
}





