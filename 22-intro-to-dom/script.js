let tbody = document.querySelector('tbody')
addNewInstructor(tbody, "Missy", "Elliott")
// addNewInstructor2(tbody, "Missy", "Elliott")

function addNewInstructor(node, firstName, lastName){
  let trElement = document.createElement('tr')
  trElement.id="row-4"
  node.appendChild(trElement)

  let tdFirstName = document.createElement('td')
  let tdLastName = document.createElement('td')
  let tdEmail = document.createElement('td')

  tdFirstName.innerText = `${firstName}`
  tdLastName.innerText = `${lastName}`
  tdEmail.innerText =
  `${firstName.toLowerCase()}.${lastName.toLowerCase()}@flatironschool.com`

  trElement.appendChild(tdFirstName)
  trElement.appendChild(tdLastName)
  trElement.appendChild(tdEmail)
}

// function addNewInstructor2(node, firstName, lastName){
//   node.innerHTML +=
//   `<tr id="row-4">
//           <td class="firstName">${firstName}</td>
//           <td class="lastName">${lastName}</td>
//           <td class="email">${firstName.toLowerCase()}.${lastName.toLowerCase()}@flatironschool.com</td>
//         </tr>`
// }
