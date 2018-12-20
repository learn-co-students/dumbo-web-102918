// 1

// function introduce() {
//   // console.log(this)
//   // console.log(secondParam)
//   // var builder = ""
//   // for (var i = numExclamationMarks - 1; i >= 0; i--) {
//   //   builder += "!"
//   // }
//   return `Hello, I'm ${ this.fullName }` //+  builder;
// }

// const graham = {
//   fullName: "Graham Aden Troyer-Joy"
// }


// const graceHopper = {
//   fullName: "Grace Hopper",
//   introduce: introduce

// }

// console.log(graham.introduce())

// const introduce = graham.introduce;

// console.log(introduce())


// graceHopper.introduce = introduce.bind(graham);

// console.log(graceHopper.introduce(50))



// 2
// function Human(fullName){
//   this.fullName = fullName;
//   console.log(this);
// }

// class Human{
//   constructor(fullName){
//     this.fullName = fullName
//   }
// }

// grace = new Human("Grace Hopper");

// // Human();

// // 3
// Human.prototype.learn = function(){
//   console.log(this);
//   return `${ this.fullName } learning!`;
// }

// console.log(grace.learn())
// console.log(Human.prototype.learn())

// 4
document.querySelector("body").addEventListener("click", () => {
  console.log(this);
});













