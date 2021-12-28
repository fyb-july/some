interface filterProps{
    ThemeID?:number,
    Body?:number,
    EquipmentsJSON?:number,
    JointID?:number,
    Category?:number,
    MuscleGroupsJSON?:number,
    PrimaryMuscleGroupID?:number
}
const filterExercise=(filter:filterProps,data:any,nameFilter:string)=>{
    let res=data.filter((nF:any)=>{
        return nF.Title.indexOf(nameFilter)!==-1
    })
    const result = {}
    Object.keys(filter).forEach((i:any)=>{
        if((filter as any)[i]!==undefined){
            (result as any)[i]=Number((filter as any)[i])
        }
    })
    Object.keys(result).forEach((r:any)=>{
        const current=(result as any)[r]
        // eslint-disable-next-line 
       res= res.filter((f:any)=>{
           if(r==='MuscleGroupsJSON'||r==='EquipmentsJSON'){
               const item=f[r]
               if(item!==null){
                return item.indexOf(current)!==-1
               }
           }
           else{
               return f[r]===current
           }
       })
    })
    return res
}
  // eslint-disable-next-line 
export type {
    filterProps
}
export default filterExercise