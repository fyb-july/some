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





