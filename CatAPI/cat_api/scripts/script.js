/*
    This file contains all JavaScript code
    for interacting with the remove Web API
    provided by https://thecatapi.com/.

    Author: Felix Chen
    File: script.js
    Date: 12/06/23
 */

window.onload = async () => {
    // add a click event handler
    let button = document.querySelector("button");
    button.onclick = loadCat;

    let url = "https://api.thecatapi.com/v1/breeds";
    let config = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
            "x-api-key": "(insert cat api key)"
        }
    };

    let response = await fetch(url, config);
    let data = await response.json();
    showBreeds(data);
};

function showBreeds(breedsArray) {
    console.log(breedsArray)

    // loops through and adds breeds to the select tag
    let select = document.getElementById("breeds");
    for (let i = 0; i < breedsArray.length; i++) {

        // makes new option for each breed
        let breed = breedsArray[i];
        let breedName = document.createElement("option");

        breedName.textContent = breed.name;
        breedName.setAttribute("value", breed.id);

        select.appendChild(breedName);
    }

}

function loadCat() {
    let breeds = document.getElementById("breeds");
    let currentBreed = breeds.value;

    let url = `https://api.thecatapi.com/v1/breeds/${currentBreed}`;
    let config = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
            "x-api-key": "(insert cat api key)"
        }
    };
    fetch(url, config)
        .then(function (response) {
        console.log(response);
        return response.json();

        })
        .then(function(data) {
        displayInfo(data);
        })
        .then(catImages);
};

function displayInfo(breedsArray) {
    let cat = breedsArray;
    console.log(breedsArray);

    let name = document.getElementById("name");
    name.textContent = cat.name;

    let description = document.getElementById("description");
    description.textContent = cat.description;

    let origin = document.getElementById("origin");
    origin.textContent = cat.origin;

    let lifeSpan = document.getElementById("life-span");
    lifeSpan.textContent = cat.life_span;

    let childFriendly = document.getElementById("child-friendly");
    childFriendly.textContent = cat.child_friendly;
    switch (cat.child_friendly) {
        case 1:
            childFriendly.textContent = `very unfriendly (${cat.child_friendly})`;
            break;
        case 2:
            childFriendly.textContent = `unfriendly (${cat.child_friendly})`;
            break;
        case 3:
            childFriendly.textContent = `indifferent (${cat.child_friendly})`;
            break;
        case 4:
            childFriendly.textContent = `friendly (${cat.child_friendly})`;
            break;
        case 5:
            childFriendly.textContent = `very friendly (${cat.child_friendly})`;
            break;
        default:
            childFriendly.textContent = `unknown (${cat.child_friendly})`;
            break;
    }

    let dogFriendly = document.getElementById("dog-friendly");
    dogFriendly.textContent = cat.dog_friendly;
    switch (cat.dog_friendly) {
        case 1:
            dogFriendly.textContent = `very unfriendly (${cat.dog_friendly})`;
            break;
        case 2:
            dogFriendly.textContent = `unfriendly (${cat.dog_friendly})`;
            break;
        case 3:
            dogFriendly.textContent = `indifferent (${cat.dog_friendly})`;
            break;
        case 4:
            dogFriendly.textContent = `friendly (${cat.dog_friendly})`;
            break;
        case 5:
            dogFriendly.textContent = `very friendly (${cat.dog_friendly})`;
            break;
        default:
            dogFriendly.textContent = `unknown (${cat.dog_friendly})`;
            break;
    }

    let energyLevel = document.getElementById("energy-level");
    energyLevel.textContent = cat.energy_level;
    switch (cat.energy_level) {
        case 1:
            energyLevel.textContent = `like a sloth (${cat.energy_level})`;
            break;
        case 2:
            energyLevel.textContent = `slow moving (${cat.energy_level})`;
            break;
        case 3:
            energyLevel.textContent = `energetic (${cat.energy_level})`;
            break;
        case 4:
            energyLevel.textContent = `a ball of energy (${cat.energy_level})`;
            break;
        case 5:
            energyLevel.textContent = `bouncing off the walls (${cat.energy_level})`;
            break;
        default:
            energyLevel.textContent = `unknown (${cat.energy_level})`;
            break;
    }

    let socialNeeds = document.getElementById("social-needs");
    socialNeeds.textContent = cat.social_needs;
    switch (cat.social_needs) {
        case 1:
            socialNeeds.textContent = `antisocial (${cat.social_needs})`;
            break;
        case 2:
            socialNeeds.textContent = `a loner (${cat.social_needs})`;
            break;
        case 3:
            socialNeeds.textContent = `indifferent (${cat.social_needs})`;
            break;
        case 4:
            socialNeeds.textContent = `needs friends (${cat.social_needs})`;
            break;
        case 5:
            socialNeeds.textContent = `very needy (${cat.social_needs})`;
            break;
        default:
            socialNeeds.textContent = `unknown (${cat.social_needs})`;
            break;
    }

    let learnMore = document.getElementById("wiki");
    learnMore.textContent = cat.wikipedia_url;
    wiki.innerHTML = "wikipedia";
    wiki.setAttribute("href", cat.wikipedia_url);
}

function catImages() {

    let breeds = document.getElementById("breeds");
    let currentBreed = breeds.value;

    let url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${currentBreed}`;
    let config = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
            "x-api-key": "(insert cat api key)"
        }
    };

    fetch(url, config)
        .then(function (response) {
            return response.json();
        })
        .then(loadCatImages)
};

function loadCatImages(catImageArray) {
    console.log(catImageArray);

    let list = document.getElementById("bottom");

    list.innerHTML = "";
    for (let i = 0; i < catImageArray.length; i++) {
        let images = catImageArray[i];
        let listItem = document.createElement("li");

        let image = document.createElement("img");
        image.setAttribute("src", images.url);

        let anchor = document.createElement("a");
        anchor.setAttribute("href", images.url);

        anchor.appendChild(image);
        listItem.appendChild(anchor);
        list.appendChild(listItem);
    }
}
