// Is there a shorthand way to create properties in an object literal 
// that have the the same names as variables I have in scope?
  /*
  const name = "Graham";
  const age = 32;
  const foodsDeepFriedAtHomeThisYear = [
    {
      name: "Shrimp Chips",
      vegan: false
    },
    {
      name: "Pierogis",
      vegan: true
    }
  ];

  const graham = {
    name,
    age,
    foods: foodsDeepFriedAtHomeThisYear
  };
  // graham.name = name;
  // graham["age"] = age

  // let's make ⬆️ this object have some props!

  console.log(graham)
  */

// Is there a way to dynamically define (or compute) property names 
// in an object literal e.g. based on the value of a variable?

  /*  
  const propName = "attainability"

  const newYearsResolution = {
    body: "Write code every day",
    // could we assign attainability here instead?
    [propName]: true
  }

  // newYearsResolution.year = 2018
  // newYearsResolution["year"] = 2019

  console.log(newYearsResolution)
  */

// What is destructuring and why would I want to do it?
  
  /*
  const borough = {
    name: "Brooklyn",
    population: 2636735,
    founded: 1643,
    baseballTeam: "Nets"
  }

  // const name = borough.name;
  // const population = borough.population;
  // const founded = borough.founded;

  var { founded, name, population: pop } = borough;



  // could we do all of the above in one line?

  console.log((new Date()).getFullYear() - founded + " years ago")
  */

// Could I rename variables as I destructure them?

// Could I do it to an array?
  
  /*
  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"]

  // const bestBorough = boroughNames[0]
  // const boroughWithAlltheAirports = boroughNames[3]

  const [ bestBorough, , , boroughWithAlltheAirports ] = boroughNames;

  console.log(bestBorough)
  console.log(boroughWithAlltheAirports)
  */

// Could I do it to the parameters of a function?
  /*
  const spiceGirls = [
    {
      spicyName: "Ginger",
      legalName: "Geri Halliwell",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Scary",
      legalName: "Melanie Brown",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Baby",
      legalName: "Emma Bunton",
      successfulSoloCareer: "😬", 
      participatingIn2019ReunionTour: true
    },
    {
      spicyName: "Posh",
      legalName: "Victoria Beckham (née adams)",
      successfulSoloCareer: false, 
      participatingIn2019ReunionTour: false
    },
    {
      spicyName: "Sporty",
      legalName: "Melanie Chisolm",
      successfulSoloCareer: true, 
      participatingIn2019ReunionTour: true
    },
  ]

  function greet({ spicyName, participatingIn2019ReunionTour: touring  }, banana) {
    // can we make this function shorter?
    console.log(banana)
    console.log(spicyName)
    console.log(touring)
    const reunionTourBit = touring ? ":D" : "-_-";
    return `Hello, ${ spicyName } Spice! ${ reunionTourBit }`
  }

  const me = { 
    name: "Graham", 
    participatingIn2019ReunionTour: "hell yeah",
  };
  // console.log(spiceGirls.map(greet).join("\r\n\r\n"))
  console.log(greet(me, true))
  */


// What is the spread operator and why would I want to use it?

/*
  const graham2018 = {
    name: "Graham",
    employer: "Flatiron School",
    borough: "Brooklyn",
    cooksAtHome: false
  }

  const goodHabits = {
    exercises: true,
    publicRadioMember: true,
    cooksAtHome: true,
  }

  const graham2019 = {
    ...goodHabits,
    ...graham2018,
    // cooksAtHome: true,



    // name: graham2018.name,
    // employer: graham2018.employer,
    // borough: graham2018.borough,
    // exercises: goodHabits.exercises,
    // publicRadioMember: goodHabits.publicRadioMember
  }

  // Object.assign({}, { foo: "bar" })

  console.log(graham2019)

  const newYearSameMe = {
    ...graham2018
  }
  console.log(newYearSameMe)
  console.log(graham2018)
  console.log(newYearSameMe === graham2018)

  */
// Could I do it to an array?
  
  /*
  const bodyParts = ["shoulders", "knees", "toes", "knees"];

  const funSong = ["head", ...bodyParts, "toes"];
  // const funSong2 = funSong.slice()
  const funSong2 = [ ...funSong ]

  console.log(funSong2)
  console.log(funSong2.join(" and "))
  console.log(funSong === funSong2)
  */

// Could I do it to the parameters of a function?
// Is that called rest parameters?

  
  const extendedRemix = ["head", "shoulders", "knees", "toes", "knees", "toes"]

  function first2(first, second) {
    return `${ first } and ${ second }`;
  }

  function first4(first, second, third, fourth) {
    return [first, second, third, fourth].join(" and ")
  }

  function all(...bodyParts) {
    console.log(bodyParts)
    return bodyParts.join(" and ")
  }

  // console.log(first2(extendedRemix[0], extendedRemix[1]))
  // console.log(first2.apply(null, extendedRemix))
  // console.log(first4.apply(null, extendedRemix))
  console.log(all("head", "shoulders", "elbows", "hips"))
  console.log(all.apply(null, extendedRemix.slice(4)))


// What are some key differences / gotchas surrounding arrow functions?
// How do arrow functions treat `this` differently than traditional functions?

  /*
  class Lightswitch {

    constructor({ colorHex, colorName }) {
      this.button = document.createElement("button");
      this.button.innerText = colorName;
      this.colorHex = colorHex;

      const body = document.querySelector("body")
      body.appendChild(this.button)

      this.button.addEventListener("click", function() {
        body.style.backgroundColor = this.colorHex;
      })
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    new Lightswitch({ colorHex: "#00f", colorName: "Blue" });
    new Lightswitch({ colorHex: "#fa0", colorName: "Orange" });
  })
  
  */

// When do I need { } curly braces with an arrow function? When can I skip them?
// Under what circumstances will an arrow function implicitly return?
  
  /*
  const spiceGirls = ["Scary", "Baby", "Ginger", "Posh", "Sporty"]

  console.log(spiceGirls.map((adjective) => {
    const fullName = adjective.toUpperCase() + " SPICE"
    return fullName;
  }).join("\r\n"));
  */

// an I define a default parameter for a JS function?

/*
function greet(name) {
  name = name || "Ginger Spice"
  return `Hello, ${ name }`
}

console.log(greet("Graham"))
console.log(greet())
*/

