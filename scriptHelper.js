// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget');

    // Format the HTML content
    let missionHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;

    // Set the innerHTML of the missionTarget div
    missionTarget.innerHTML = missionHTML;
 }
 
 function validateInput(testInput) {
    if (typeof testInput !== 'string') {
        // Check if the input is not a string
        return "Invalid Type";
    }
    if(testInput.trim() === '') {
        return "Empty";
    }
    if (!isNaN(testInput)) {
        return "Is a Number";
    }
    return "Not a Number";
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let checkList = document.getElementById('faultyItems')
    let launchStatus = document.getElementById('launchStatus')
    let pilotName = document.getElementById('pilotStatus')
    pilotName.innerHTML = `<li value=1>Pilot ${pilot} is ready for launch</li>`
    let coPilotName = document.getElementById('copilotStatus')
    coPilotName.innerHTML = `<li value=2>Co-pilot ${copilot} is ready for launch</li>`
    let fuel = document.getElementById('fuelStatus')
    let cargo = document.getElementById('cargoStatus')
    
    checkList.style.visibility = "visible";
if (fuelLevel < 10000 || cargoLevel > 10000) {
    launchStatus.innerHTML = `<h2>Shuttle Not Ready for Launch</h2>`;
    launchStatus.style.color = 'red';
    if (fuelLevel < 10000) {
        fuel.innerHTML = `<li value=3>Fuel level too low for launch</li>`;
    } else {
        fuel.innerHTML = `<li value=3>Fuel level high enough for launch</li>`;
    }
    if (cargoLevel > 10000) {
        cargo.innerHTML = `<li value=4>Cargo mass too heavy for launch</li>`;
    } else {
        cargo.innerHTML = `<li value=4>Cargo mass low enough for launch</li>`;
    }
} else {
    launchStatus.innerHTML = `<h2>Shuttle is Ready for Launch</h2>`;
    launchStatus.style.color = 'green';
    fuel.innerHTML = `<li value=3>Fuel level high enough for launch</li>`;
    cargo.innerHTML = `<li value=4>Cargo mass low enough for launch</li>`;
}

}
 
 async function myFetch() {
     let planetsReturned;
        let urlData = 'https://handlers.education.launchcode.org/static/planets.json';
     planetsReturned = await fetch(urlData).then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomPick = Math.floor(Math.random() * planets.length);
    return planets[randomPick];
 }
 
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;