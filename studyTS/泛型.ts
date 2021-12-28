// const foo = <T,P extends unknown>(x: T,y:P):P=>{
//     return y
// }

const foo=<T >(x:T):T=>{
    return x
}
const foo1=<T>(x:T,y:T)=>{
        const t={a:(x as any).a,b:(y as any).b}
     return t
}
foo(6)
// type aa={
//     a:string
//     b:string
// }

// console.log(foo1<aa>({a:'1',b:'1'},{a:'1',b:'1'}))
// function countBits(n: number): number[] {
//     // 首先先创建一个比n的length长1的数组里面用0填充，因为第一位就是0
//     let arr=new Array(n+1).fill(0)
//     for (var i=1;i<=n;i++){
//     // 因为偶数>>1的话和它左移前的数1的个数是一样的，只是相当于把1集体后移了
//     // 奇数的话会比左移以后的书少了1，我们加上一以后就可以了
//     if(i%2==0){
//     arr[i]=arr[Math.floor(i/2)]
//     }else{
//     arr[i]=arr[Math.floor(i/2)]+1
//         }
//     }
//     return arr
// };
interface First{
    aa:number
}
interface First{
    bb:number
}
const first:First={aa:1,bb:1}
type Secong={
     cc:number
}
const secong:Secong={cc:1}
const fun=<T>(item:T):T=>{
    return item
}

fun<number>(1)
fun<string>('1')