class Queue{
    constructor(){
        this.item=[]
    }
    push(i){
        this.item.push(i)
        return this.item.length
    }
    shift(){
      return  this.item.shift()
    }
    print(){
        console.log(this.item) 
    }
    clear(){
        this.item=[]
    }
    pack(){
        return this.item[0]
    }
}
const queue=new Queue
queue.push(1) 
queue.print()
queue.push(2) 
queue.print()
queue.shift()
queue.print()