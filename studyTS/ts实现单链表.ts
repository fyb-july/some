// 先定义一个节点类
class ListNode<V>{
    val: V | undefined;
    next: ListNode<V>;
    constructor(val?: V) {
        this.val = val
        this.next = null
    }
}
// 定义一个链表
class SingleLinkedList<V>{
    header: ListNode<V>
    constructor(val: V) {
        this.header = new ListNode(val)
    }
    // 定义一个查找方法
    find(item: V) {
        let curr = this.header
        // 利用迭代方法找到当前的item
        while (curr) {
            if (curr.val === item) {
                return curr
            }
            curr = curr.next
        }
    }
    // 插入，在找到当前item的时候将当前的next变成插入的哪一个，插入的item的next变成原item.next
    insert(newitem: V, item: V) {
        let currNode = this.find(item)
        let nextNode = currNode.next
        let newNode = new ListNode(newitem)
        newNode.next = nextNode
        currNode.next = newNode
    }
    // 查找前一个
    prevNode(item: V) {
        let curr = this.header
        while (curr.next) {
            if (curr.next.val === item) {
                return curr
            }
            curr = curr.next
        }
    }
    // 删除
    remove(item) {
        const prevNode = this.prevNode(item)
        const currNode = this.find(item)
        prevNode.next = currNode.next
    }
    // 打印查看链表
    print() {
        console.log(this.header)
    }

}

// const list1=new SingleLinkedList('head')
// list1.insert('next','head')
// list1.insert('prev','head')
// list1.insert('1111','head')
// list1.print()
// list1.remove('111')
// list1.remove('prev')
// list1.print()
const list1=new SingleLinkedList(1111)