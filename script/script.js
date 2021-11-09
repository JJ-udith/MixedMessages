// Sample Sentence Structures
const intros = [
  "The atmosphere is asking for permission...",
  "There is something big happening...",
  "My crystal ball is shaking...",
  "I need all my powers for this fortune...",
  "Well, if you ask me...",
  "I'm not sure how to tell you this...",
  "Mmmmhhhh...",
  "Is that smoke? How did that happen? Anyways...",
  "Your fortune is my fortune...",
  "The dark side is strong with me...",
];

const objects = [
  "a full moon",
  "a pile of money",
  "a black figure",
  "a black cat",
  "the Dark Lord",
  "a blazing sun",
  "an eclipse",
  "a tall woman",
  "Saturn",
  "a vampire",
];

const contexts = [
  "a forest",
  "a dark cloud",
  "a dog's house",
  "a little shelter",
  "a toilet",
  "a giant belly",
  "an old women's purse",
  "a man's heart",
  "a lake",
  "a tree house",
];

const events = [
  "will give you a lot of pleasure.",
  "will make you forget all your sorrows.",
  "is going to make you extremely sad.",
  "will pee on you.",
  "has absolutely nothing to do with your mother.",
  "will make you wanna kill yourself. Don't do it!",
  "is the proof that you are in a simulation.",
  "may come to your birthday party.",
  "might give you a headache.",
  "is going to marry you.",
  "has got to be a bad sign!",
];

// Get Each Element
const headline = document.getElementById("headline");
const card = document.getElementById("card");
const footer = document.getElementById("footer");
const form = document.getElementById("form");
const nameElement = document.getElementById("name");
const firstMessage = document.getElementById("first-message");
const secondMessage = document.getElementById("second-message");

// Fade Effect on Page Load
$(document).ready(() => $(card).fadeTo(2000, 0.9));
$(document).ready(() => $(footer).fadeTo(2000, 0.5));
$(document).ready(() => $(headline).fadeIn(2000));

// Generate Random Input
const randomGenerator = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Capitalize First Letter of Input Name
const capitalize = (input) => {
  if (input) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  }
};

// Fade Effect for Elements
const fadeEffect = (element1, element2, element3) => {
  $(element1).fadeOut(1000, () => {
    $(element2)
      .html(`${randomGenerator(intros)}`)
      .fadeIn(2000)
      .fadeOut(4000, () => {
        $(element3)
          .html(
            `Dear ${capitalize(nameElement.value)}, I see ${randomGenerator(
              objects
            )}, in ${randomGenerator(contexts)}, that ${randomGenerator(
              events
            )}`
          )
          .fadeIn(3000);
      });
  });
};

// On Submit Event
const submitAction = () => {
  if (nameElement.value) {
    fadeEffect(form, firstMessage, secondMessage);
  }
};
