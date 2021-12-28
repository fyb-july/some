 // 创建一个strack,给他添加增加和删除方法
 class Strack {
    item = []
    constructor() {
        this.item=item
    }
    push(a) {
        return this.item.push(a)
    }
    pop() {
        if (this.item.length > 0) {
            return this.item.pop()
        } else {
            return 'strack 已经空了'
        }
    }
    pack() {
        return this.item[this.item.length - 1]
    }
    see(){
        return this.item
    }
}
const strack = new Strack
strack.push(1)
strack.push(2)
console.log(strack.see())