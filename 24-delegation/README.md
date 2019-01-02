# PART 1
- What is the DOMContentLoaded event?
- How much code should I write in JS before I test it?
- How can I remove elements from the DOM?
- What are the different main ways of adding elements to the DOM? What are some key considerations in choosing between them?
- What is a closure?
- What is a data attribute? How and why would I want to use one?

# PART 2
- When do inline anonymous functions present a risk to JS performance?
- What are my options when I need to bind an event handler to something that isn't in the DOM yet?
- What is event bubbling and why is it useful and necessary? What is the difference between .stopPropagation and .preventDefault?
- What is delegation? What are the factors I should consider in deciding whether to use delegation? What does delegation have to do with event bubbling?
- What role does the stable parent play in delegation?

## Handy link
https://codepen.io/telegram/pen/maJxVV

1. Find a stable parent (element that will always be on the DOM)
2. Bind an event listener to that stable parent
3. In the event listener, figure out if you clicked on one of the child items (that may or may not be on the dom at DomContentLoaded or whenever you bind your event listeners)
4. Do the thing (or not)
