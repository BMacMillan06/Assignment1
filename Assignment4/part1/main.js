/*
    Name: Bradley MacMillan
    File: main.js
    Date: March 24 2024
    Descritpion: This file creates a random story
*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var inserty = ["the soup kitchen", "Disneyland", "the White House"];
var insertz = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertx);
  var yItem = randomValueFromArray(inserty);
  var zItem = randomValueFromArray(insertz);

  var newStory = newStory.replaceAll(":insertx", xItem);
  var newStory = newStory.replaceAll(":inserty", yItem);
  var newStory = newStory.replaceAll(":insertz", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94-32) * (5/9)) + " centigrade";
    var newStory = newStory.replace('94 farenheit', temperature);
    var newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}