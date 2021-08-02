(async function (){
    try{
        let result = await new Promise((resolve, reject)=>{
           setTimeout(()=>{
                reject("err");
           }, 2000)
        });
        
        
    } 
    catch (err) {
        console.log(err);
        
    }
})();