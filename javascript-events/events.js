let allBoxes = document.getElementsByClassName('box');
let form = document.querySelector('.form-container');

for (let index = 0; index < allBoxes.length; index++) {
  allBoxes[index].addEventListener("click", () => {
    alert("🤩🤩🤩 CONGRATULATIONS!!!, PLEASE ENTER YOUR SOCIAL SECURITY NUMBER TO RETRIEVE IT.");
    form.style.display = 'block';
  })
}


form.querySelector('button').addEventListener("mouseover", () => {
  alert('Enter your SSN to claim a FREE tesla!');
})