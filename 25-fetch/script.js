
function newDog() {
  const promise = fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    document.getElementById("pupper").src = data.message
  });
}

newDog();
setTimeout(newDog, 1000)

const promise = fetch("https://dog.ceo/api/breeds/image/random")

// const responseCallback = function(response){
//   const jsonPromise = response.json()
//   jsonPromise.then(function(data){
//     console.log(data);
//   })
//   return "HELLO FROM THE OTHER SIIIIIDE"
// }


// const thirdPromise = promise.then(responseCallback)
// // promise.catch(callback)

// console.log(thirdPromise)

