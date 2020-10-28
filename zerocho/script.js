// var relationship1 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends: function(){
//         var that = this;
//         this.friends.forEach(function (friend){
//             console.log(that.name, friend); //console,log(this.namem friend)
//         });
//     },
// };
// relationship1.logFriends();


// const relationship2 = {
//     name: 'zero',
//     friends:['nero', 'hero', 'xero'],
//     logFriends(){
//         this.friends.forEach(friend =>{
//             console.log(this.name,friend);
//         });
//     },
// };
// relationship1.logFriends();



// const relationship3 = {
//     name: 'zero',
//     friends:['nero', 'hero', 'xero'],
//     logFriends(){
//         this.friends.forEach(friend =>{
//             console.log(this.name,friend);
//         });
//     },
// };
// relationship3.logFriends();

///////////////////////////////////////////////////////////////

//
const example = { a: 123, b: {c: 135, d:146}}
const a = example.a;
const b = example.b;
const c = example.b.c;
const d = example.b.d;

//구조분해문법
const {a,b:{d}} = example;

//
arr = [1,2,3,4,5];
const x = arr[0];
const y = arr[1];
const z = arr[4];
//이것을
const[x,y,,,z] = arr;

alert(c);
console.log(a);
console.log(b);
console.log(c);
console.log(d);



