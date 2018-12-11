
function deleteMe(event){
  console.log(event.target)
  if (event.target.className === "item")
    event.target.remove()
}


document.addEventListener("DOMContentLoaded", function(){
  Array.from(document.getElementsByClassName("nav-button")).forEach(setUpNavButton)
  document.querySelector(".items").addEventListener("click", deleteMe)
  // document.querySelectorAll(".items li").forEach(li => li.addEventListener("click", deleteMe))
});

function addItem(text){
  let node = document.createElement("li")
  node.className = "item"
  document.getElementsByClassName("items")[0].prepend(node)
  // node.addEventListener("click", deleteMe)
  node.innerHTML = text
  // console.log(node)
}

function addCoconut(){
  addItem("🥥")
}

function addTaco(){
  addItem("🌮")
}

function setUpNavButton(button) {
  button.addEventListener("click", function(){
    addItem(button.dataset.emoji)
  })
}
