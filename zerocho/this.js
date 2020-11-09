/*
this는 전역객체
자바스크립트에선느 this는 전역객체


그냥은 global이 아님
function안에 있는것은 global

*/

console.log(this);  //빈 객체가 됨 global이 아님
console.log(this === module.exports);

function a(){
    console.log(this === global);   //function안에 있는 this는 global
}

a();