var ws = new WeakSet();
const aa={}
// ws.add(1)
ws.add(aa)

console.log(ws.has(aa))
// console.log(ws.has(1))