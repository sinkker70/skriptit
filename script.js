console.log("Hello World", "jeeeee!")
console.info("mitä?")

y = 110; 
console.log(y)

big = 34928758923759823758.0;
let e; 
console.log("wetwerw", e)

hop = {
    y: 8, 
    x: 43
}
console.table(hop);

function fnNimi(a, b, c) {
    return a + b + c; 
}

function tulostaNimi(f) {
    console.log(f(1,2,3));
    function inner(a, b){
        console.log("inner", a, b);
    }
}
tulostaNimi(fnNimi);