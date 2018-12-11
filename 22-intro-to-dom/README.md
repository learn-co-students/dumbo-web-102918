### Intro to the DOM

## Lecture Objectives
- Tree of Nodes (The DOM and the parents and siblings within it)
- Selectors and how to use them (The power and convenience of querySelector)
- CRUD in the DOM

## The DOM vs. HTML
- What is the DOM?
- Tree of Nodes

## DOM nodes, parent child sibling relationships
- traversing nodes to selector the desired node

## Grabbing and Manipulating DOM elements
- Twitter
  - content (NodeList vs HTMLCollection?)
    - NodeList works with .forEach()
    - HTMLCollection works with for loop
    - Array.from()
  - css styling
- [DIY](https://en.wikipedia.org/wiki/Document_Object_Model)
  - innerHTML vs. innerText

### Selectors and how to use them

| Selector name                   | Return shape   | Return type    | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | --------------------- | -------- |
| `element.getElementById()`        | Single element | Element        | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | https://goo.gl/vTfXza | Yes      |


### CRUD
- CREATE: `createElement()` + `appendChild()`
- READ: any selector method
- UPDATE: `innerHTML`
- DELETE: `removeChild()`
