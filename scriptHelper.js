// Write your helper functions here!

// let testForm = document.getElementById("testForm");
// let launchForm = document.getElementById("launchForm");
// let formSubmit = document.getElementById("formSubmit");
// let pilotName = document.getElementById("pilotName");
// let copilotName = document.getElementById("copilotName");
// let fuelLevels = document.getElementById("fuelLevel");
// let cargoMass = document.getElementById("cargoMass");

// require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  numberInput = Number(testInput);
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(numberInput)) {
    return "Not a Number";
  } else if (isNaN(numberInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
 
  
  // let pilotStatus = document.getElementById("pilotStatus");

  if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) {
      alert("All fields are required!");
      console.log("help!!!")
  } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
    alert("Make sure to enter valid information for each field!");
  }
  
  if (fuelLevel < 10000) {
    list.style.visibility="visible"
    
  }
  
}
//add document, list, back to formSubmission
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;
