
document.addEventListener("DOMContentLoaded", function(){
  fetch("http://localhost:3000/api/v1/dinosaurs")
    .then(res => res.json())
    .then(data => console.log(data))
})