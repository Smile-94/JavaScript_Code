//named Immediately Invoked Function Expression(IIFE)
(function hello(){
    console.log("Hello world");
})();

((country)=>{
    console.log(`Hello World ${country}` );
})("Bangladesh")