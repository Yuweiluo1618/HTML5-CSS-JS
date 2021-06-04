function fibonacci(number){
    return (number == 1 || number == 2) ? 1 : fibonacci(number-1)+fibonacci(number-2);
}
var onmessage = function(event){
    var result = fibonacci(event.data);
    postMessage(result);
}