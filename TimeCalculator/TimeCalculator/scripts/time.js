/*
This file contains javascript code to get time since 1/1/70 and converts
milliseconds to seconds, minutes, hours, days, and years then displays it
to the HTML
Author: Felix Chen
Date: 10/16/23
File name: time.js
 */

// gets the time
let millis = new Date().getTime();
console.log(millis);

// sets variables and converts
const MILLIS_IN_SECOND = 1000;
let seconds = millis / MILLIS_IN_SECOND;

const SECONDS_IN_MIN = 60;
let minutes = seconds / SECONDS_IN_MIN;

const MINUTES_IN_HOUR = 60;
let hours = minutes / MINUTES_IN_HOUR;

const HOURS_IN_DAY = 24;
let days = hours / HOURS_IN_DAY;

const DAYS_IN_YEAR = 365;
let years = days / DAYS_IN_YEAR;

// rounds the numbers
millis = Math.round(millis);
seconds = Math.round(seconds);
minutes = Math.round(minutes);
hours = Math.round(hours);
days = Math.round(days);
years = Math.round(years);

// displays to html
document.getElementById('millis').innerHTML = millis;
document.getElementById('seconds').innerHTML = seconds;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('hours').innerHTML = hours;
document.getElementById('days').innerHTML = days;
document.getElementById('years').innerHTML = years;