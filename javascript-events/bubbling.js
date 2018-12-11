// bind to html elements
const espresso = document.getElementById("espresso");
const milk = document.getElementById("milk");
const sugar = document.getElementById("sugar");

// generic handler
const clicked = function (event) {
  // console.log(this)
  // console.log("this", this)
  // console.log("event target", event.target)
  // console.log("current target", event.currentTarget)
  // console.log(`Clicked ${this.id}`, event.target.id);

  // event.stopPropagation();
};

// event listeners
espresso.addEventListener("click", clicked);
milk.addEventListener("click", clicked);
sugar.addEventListener("click", clicked);