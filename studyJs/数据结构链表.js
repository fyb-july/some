class Node{
    constructor(item,next){
        this.item=item
        this.next=next||null
    }
}

class List{
    constructor(){
       this.header=new Node('head')
    }
    find(item){
        let curr=this.header
        while(curr){
            if(curr.item===item){
                return curr
            }
            curr=curr.next
        }
    }
    insert(newitem,item){
     let currNode=this.find(item)
     let nextNode=currNode.next
     let newNode=new Node(newitem)
     newNode.next=nextNode
     currNode.next=newNode
    }
    prevNode(item){
        let curr=this.header
        while(curr.next){
            if(curr.next.item===item){
                return curr
            }
            curr=curr.next
        }
    }
    remove(item){
        const prevNode=this.prevNode(item)
        const currNode=this.find(item)
        prevNode.next=currNode.next
    }
    print(){
        console.log(this.header)
    }
}
const list=new List
list.insert('next','head')
list.insert('prev','head')
list.insert('111','head')
list.print()
list.remove('111')
list.remove('prev')
list.print()


