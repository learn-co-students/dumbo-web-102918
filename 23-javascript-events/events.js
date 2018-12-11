let allBoxes = document.getElementsByClassName('box');
let form = document.querySelector('.form-container');

for (let index = 0; index < allBoxes.length; index++) {
  allBoxes[index].addEventListener("click", function() {
    console.log("🤩🤩🤩 CONGRATULATIONS!!!, PLEASE ENTER YOUR SOCIAL SECURITY NUMBER TO RETRIEVE IT.");
    form.style.display = 'block';
  })
}


// addEventListener('the event i'm listening for', 'the function i execute when the event matches')

form.querySelector('button').addEventListener("mouseover", () => {
  form.style.display = 'none';
})