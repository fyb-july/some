// 定义一个优先队列，返回权重最大的
class PriorityQueue{
    constructor(){
        this.item=[]
    }
    push(i){
        if(this.item.length===0){
            this.item.push(i)
        }
        else if(this.item[this.item.length-1][1]<i[1]){
            this.item.splice(0,0,i)
        }
        else{
            let add=true
            for (var j=this.item.length-1;j>=0;j--){
                if(this.item[j][1]>i[1]&&add){
                    this.item.splice(j+1,0,i)
                    add=false
                }
            }
        }
    }
    shift(){
        return this.item.shift()
    }
    print(){
        console.log(this.item)
    }
}
const pQueue=new PriorityQueue
pQueue.push([0,1])
pQueue.push([0,0])
pQueue.push([0,2])
pQueue.push([0,3])
pQueue.push([0,0])
pQueue.print()
