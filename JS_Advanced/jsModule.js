// function jsModule(){
//         var msg = "js";
//         function one(){
//         console.log(msg+1);

//     }

//     function two(){
//         console.log(msg+2);

//     }

//     return {
//         one: one,
//         two: two
//     }
// }

(function(){
    var msg = "js";
    function one(){
        console.log(msg+1);
    }

    function two(){
        console.log(msg+2);
    }

    window.module = {
        one: one,
        two: two
    }
})();
