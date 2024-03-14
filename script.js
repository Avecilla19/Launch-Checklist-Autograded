// Write your JavaScript code here!

//const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    const pilotNameInput = document.querySelector('input[name="pilotName"]');
    const coPilotInput = document.querySelector('input[name="copilotName"]');
    const fuelLevelInput = document.querySelector('input[name="fuelLevel"]');
    const cargoMassInput = document.querySelector('input[name="cargoMass"]');
    const submitButton = document.getElementById('formSubmit');

    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
      
        if (pilotNameInput.value === "" || coPilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("Please fill everything out");
            return;
        }

      
        formSubmission(document, "faultyItems", pilotNameInput.value, coPilotInput.value, fuelLevelInput.value, cargoMassInput.value);
    });

    myFetch().then(function(response) {
        const listedPlanets = response;
        console.log(listedPlanets);

       
        const randomPlanet = pickPlanet(listedPlanets);

        
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    });
});