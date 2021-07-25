const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("err");
    }, 1000);
});


p.then(value=>{
   console.log('...');
    
}).catch(err=>{
    console.log(err);
    
}).finally(()=>{
    console.log('finally');
    
})

