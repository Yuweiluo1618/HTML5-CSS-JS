async function test(){
    const p1 = await new Promise((resolve, reject)=>{
        reject("error");
    }) ;
    // console.log(p1);
    return p1;
    
}

test().catch(err=>{
    console.log(err);
    
}).finally(()=>{
    console.log('finally');
    
})



