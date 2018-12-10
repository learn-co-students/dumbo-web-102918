

// ["a", "b", "c"].each do |element|

// end

function foo(first){
  console.log(first)
  return first.toUpperCase()
}

var returnValue = ["a", "b", "c"].forEach(foo)


// function forEach(callback) {
//   for (var i = Things.length - 1; i >= 0; i--) {
//     callback(array[i], i, array)
//   }
// }


console.log(returnValue)
// Function Composition
// next(thank("u"))

// function thank(who) {
//   // console.log(`thank ${ who }`)
//   return `thank ${ who }`
// }

// function next(pieceOfText) {
//   // console.log(pieceOfText)
//   return `${ pieceOfText }, next`;
// }


// // console.log(thank(next("manny")))
// console.log(next(thank("u")))

// Callbacks
// thank("u", next)


// function foo(){
//   console.log("bar")
// }


// i = 0

// var bar = function(){
//   console.log("sdfjhsd")
//   return 5;
// }

// // setTimeout(bar, 2000)
// setInterval(bar(), 1000)



// function doNTimes(callbackToCall5Times, timesToGo){
//   // console.log(asdfkjhasdlfkjhasldkjfhalskdjfh);
//   for(let i = 0; i < timesToGo; i++) {
//     callbackToCall5Times(); 
//   }
// }

// console.log(foo)
// console.log(foo())

// passed in: reference to foo
// doNTimes(bar, 1200000);
// passed in: foo is called, return value of foo
// do5Times(foo());




// Scope

// function say() {
//   // console.log(anik)
//   // var anik = "javascript developer"
//   console.log(anik);
// }

// // const graham = "instructor"

// // anik = "student"
// // console.log(anik)
// say()
// console.log(anik)

// var anik = "JS Dev"
// var anik = "JS Dev"
// var anik = "JS Dev"
// var anik = "JS Dev"
// var anik = "Jsdfjsdjkv"

// console.log(anik)


// var foo = "potato"

// if (true) {
//   const foo = 99;
//   // foo = "potato"
//   // console.log(foo)
// }

// foo = "bar"

// // potato();

// console.log(foo);














