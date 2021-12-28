// 先实现双向链表节点类
class DoubleLinkedListNode<K, V> {
    key: K | undefined; // 因为我们需要配合 Map，需多加一条 key 属性
    val: V | undefined;
    next: DoubleLinkedListNode<K, V> | null; // 指向下一个节点
    prev: DoubleLinkedListNode<K, V> | null; // 指向上一个节点
  
    constructor(key?: K, val?: V) {
      this.key = key;
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  // 实现双链表类
  class DoubleLinkedList<K, V> {
    head: DoubleLinkedListNode<K, V>;
    tail: DoubleLinkedListNode<K, V>;
  
    constructor() {
    // 构造一个双向的链表
      this.head = new DoubleLinkedListNode();
      this.tail = new DoubleLinkedListNode();
  
      this.head.next = this.tail;
      this.head.prev = this.tail;
      this.tail.prev = this.head;
      this.tail.next = this.head;
    }
  
    // 将传入的节点变成 head 节点指向的下一个节点
    linkToHead(node: DoubleLinkedListNode<K, V>) {
      node.next = this.head.next; // 新节点的 next 指针指向现 head 节点的 next 指针指向的节点
      node.prev = this.head; // 新节点的 prev 指针指向 head 节点
      this.head.next!.prev = node; // head 节点的 next 指针目前指向下一个节点，将这个节点的 prev 指针指向新节点
      this.head.next = node; // 更新 head 节点的 next 指针指向 新节点
    }
  
    // 删除传入的节点，并返回被删除节点的键
    delete(node: DoubleLinkedListNode<K, V>): K {
      node.prev!.next = node.next; // 传入节点的上一个节点的 next 指针指向 传入节点的下一个节点
      node.next!.prev = node.prev; // 传入节点的下一个节点的 prev 指针指向 传入节点的上一个节点
      return node.key as K;
      // 这段代码执行完之后，我们就无法在此双向链表中继续访问传入的节点了，之后 GC 怎么垃圾回收就不是我们能干预的了
    }
  
    // 删除最后的节点
    deleteLast(): K | undefined {
      // 代表只有初始的两个帮助节点，返回 undefined
      if (this.head.next === this.tail) {
        return;
      }
  
      // 删除 tail 节点的前一个节点，即有意义的最后一个节点
      return this.delete(this.tail.prev!);
    }
  }