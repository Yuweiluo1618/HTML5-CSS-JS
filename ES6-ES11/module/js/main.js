let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    import("./alert.js").then(module =>{
        // console.log(module);
        module.hi();
        
    })
});