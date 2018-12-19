
document.addEventListener("DOMContentLoaded", function(){
  const itemsUl = document.querySelector(".items")
  document.querySelector("body").addEventListener("click", function(event){
    console.log("body got clicked, event.target is: ", event.target)
  })
  itemsUl.addEventListener("click", function(event){
    console.log("ul got clicked")
    if (event.target.className === "item"){ // clicked on an li and it bubbled up to the UL
      console.log(`...because the li ${ event.target.innerText  } originally got clicked`)
      removeSound();
      event.target.remove()
    }
    else {
      // it's a click directly to the UL probably
    }
  })
  document.getElementById("taco").addEventListener("click", function() {
    addSound();
    // document.querySelector(".items")
    const domNode = document.createElement("li")
    domNode.className = "item";
    domNode.innerText = "🌮"
    // domNode.addEventListener("click", deleteElement)
    itemsUl.prepend(domNode);
  });
})




// items