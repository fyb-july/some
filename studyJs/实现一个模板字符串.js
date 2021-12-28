   // 实现一个函数字符串模板函数 sprintf
   const template = "My name is ${name},I'm from ${city}";

   const sprintf=(aa,bb)=>{
     const teArr= aa.split('')
       Object.keys(bb).map(item=>{ 
           const str1='${'+item+'}'
           const str='$'
         if(teArr.indexOf(str)!==-1){
           teArr.splice(teArr.indexOf(str),str1.length,bb[item])
         }
       })
     return  teArr.join('')
   }
   const result = sprintf(template, {
           name: 'Yiming Zhang',
           city: 'FuJian',
   });
   console.log(result); 