// 利用原型链进行继承
// function Parent(){
//     this.num=11
//     this.nums=[11,22,22]
// }
// Parent.prototype.prient=function(){
//     console.log(this.nums)
// }
// function Child(){

// }
// Child.prototype=new Parent()
// var child=new Child()
// child.nums.push(44)
// child.prient()


// 借用构造函数
// function Parent(){
//     this.num=22
//     this.nums=[11,22,33,44]
// }
// function Child(){
//     Parent.call(this)
// }
// var child=new Child()
// child.nums.push(111)
// console.log(child.nums)


// 组合继承
// function Parent(name,age){
//         this.name=name
//         this.age=age
//         this.nums=[11,22,33,44]
//         console.log('parents')
// }
// Parent.prototype.print=function(){
//     console.log(this.name,this.age,this.nums)
// }
// function Child(name,age) {
//     Parent.call(this,name,age)
//     console.log('child')
// }

// Child.prototype=new Parent()
// Child.prototype.constructor=Child
// child= new Child('fyb',24)
// child.nums.push(55)
// child.print()


// Object.create实现的继承
//  var parents={
//      firstName:'fyb',
//      age:24
//  }
//  var child=Object.create(parents)
//  child.age=23
//  var child1=Object.create(child)
//  child1.age=25
//  console.log(child1.age,child.age,parents.age)

// 现在996的风气这么严重，如果我在没有房贷，车贷，老婆,孩子的情况下我不敢站出来抵制996难道还要那些被生活磨掉了锐气的80后leader来抵制996吗？以前别人杀狗我没去劝，后来他们杀牛我没去劝，现在他们压榨农民工我站起来了因为我是农民工。
// 我想如果我们站起来抵制996万一成功了，以后的历史上就会留下一笔浓厚的色彩，我们现在抵制是为了我们的弟弟，孩子他们不在受996的压榨，他们有时间可以享受自己的生活，生活不止有996还有时间去放松自己的精神，
// 让自己不再那么压抑，心情愉悦，有人问我为什么要站出来抵制996是什么触动了我，我想了一下可能是我在家无聊的打游戏而女朋友在加班吧，也可能是同学在加班而我一个人游戏连跪吧，其实真的很难当大家都在996的时候你一个人不加班的时候真痛苦
// 当错误成为了普通，那么正确也会成为异常吧。



