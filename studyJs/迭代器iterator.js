  // for...of
        // for (const i of [1,3,5,6]){
        //     console.log(i)
        // }
        // @iterator 能够拿到对应索引的值
        // let it=[1,3,4,5][Symbol.iterator]()
        // for (const i of it){
        //     console.log(i)
        // }
        // console.log(it.next().done) 
        // console.log(it.next().done)
        // console.log(it.next().done)
        // console.log(it.next().done)
        // console.log(it.next().done)
        // entries 迭代器返回对应索引的键值对
        // let et=[1,2,34,5].entries()
        // console.log(et.next().done)
        // console.log(et.next().done)
        // console.log(et.next().done)
        // console.log(et.next().done)
        // console.log(et.next().done)
        function doSomething(){}
        doSomething.prototype.for='aa'
        console.log( doSomething.prototype );
        const a=new doSomething
        a.prop='props'
        console.log(a);
        // 和声明函数的方式无关，
        // JavaScript 中的函数永远有一个默认原型属性。
        var doSomething = function(){};
        console.log( doSomething.prototype );
        // 迭代nums.entries()
        var nums=[1,2,3,4,5,3,4]
        for(const [k,j] of nums.entries()){
            console.log(k,j)
        }
