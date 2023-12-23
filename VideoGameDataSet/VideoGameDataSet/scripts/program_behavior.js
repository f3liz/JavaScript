/*
Contains all my javascript code for the datasets assignment

Author: Felix Chen
Date: 11/14/23
File name: program_behavior.js
 */

//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown
//on the web page
let index = 0;

// total # of elements and underlines it
let total = records.length
document.getElementById('elements').innerHTML = total;
document.getElementById('elements').style.textDecoration = "underline";

// will show first element
display();

// average used price
let totalPrice = 0;

for (let i = 0; i < records.length; i ++) {
    totalPrice += records[i]["Metrics"]["Used Price"];
}

let averagePrice = totalPrice / records.length;
// console.log(averagePrice);

document.querySelector('#average').innerHTML = averagePrice.toFixed(2);
document.querySelector('#average').style.textDecoration = 'underline';

// highest used price
let highestPrice = records[0]["Metrics"]["Used Price"];
let gameHighestPrice = records[0]["Title"];

for (let i = 0; i < records.length; i++) {
    if(records[i]["Metrics"]["Used Price"] > highestPrice) {
        highestPrice = records[i]["Metrics"]["Used Price"];
        gameHighestPrice = records[i]["Title"];
    }
}

document.querySelector('#game').innerHTML = gameHighestPrice;
document.querySelector('#game').style.textDecoration = 'underline';
document.querySelector('#price').innerHTML = highestPrice;
document.querySelector('#price').style.textDecoration = 'underline';

// count for games released on nintendo ds
let nintendoCount = 0;

for (let i = 0; i < records.length; i++) {
    if(records[i]["Release"]["Console"] === 'Nintendo DS') {
        nintendoCount += 1;
    }
}
document.querySelector('#count').innerHTML = nintendoCount;
document.querySelector('#count').style.textDecoration = 'underline';

// changes buttons to symbols
previous.innerHTML = '<';
next.innerHTML = '>';

//responds to clicks of the "previous" button
previous.onclick = function(event) {
    if (index > 0) {
        index--;
        console.log("Previous button pressed");
    } else {
        index = 0;
    }
    //make sure that index is never less than zero...

    display();
}

//responds to clicks of the "next" button
next.onclick = function(event) {
    if (index < records.length - 1) {
        index++;
        console.log("Next button pressed")
    } else {
        index = records.length - 1;
    }
    //make sure that index is never greater than
    //array.length - 1

    display();
}

//shows the current record in the array of records
//at the position within the index variable
function display()
{
    console.log("Next index is " + index);

    // square brackets
    let record = records[index];
    let title = record["Title"];
    let players = record["Features"]["Max Players"];
    let genre = record["Metadata"]["Genres"];
    let release = record["Release"]["Year"];
    let rating = record["Release"]["Rating"];
    let device = record["Release"]["Console"];

    // just to see what i was getting
    console.log(record);
    // console.log(title);
    // console.log(players);
    // console.log(genre);
    // console.log(release);
    // console.log(rating);
    // console.log(device);

    document.querySelector('#title').textContent = title;
    document.querySelector('#title').style.fontWeight = "bold";

    document.querySelector('#players').textContent = players;
    document.querySelector('#players').style.fontWeight = "bold";

    document.querySelector('#genre').textContent = genre;
    document.querySelector('#genre').style.fontWeight = "bold";

    document.querySelector('#release').textContent = release;
    document.querySelector('#release').style.fontWeight = "bold";

    document.querySelector('#rating').textContent = rating;
    document.querySelector('#rating').style.fontWeight = "bold";

    document.querySelector('#device').textContent = device;
    document.querySelector('#device').style.fontWeight = "bold";
}
