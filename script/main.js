const headline = document.getElementById("headline");
const card = document.getElementById("card");
const footer = document.getElementById("footer");
const form = document.getElementById("form");
const nameElement = document.getElementById("name");
const submitButton = document.getElementById("submit-btn");
const partOne = document.getElementById("part-one");

// Fade Effect on Page Load
$(document).ready(() => $(card).fadeTo(2000, 0.9));
$(document).ready(() => $(footer).fadeTo(2000, 0.5));
$(document).ready(() => $(headline).fadeIn(2000));

// Fade Effect for Elements
const fadeEffect = (element1, element2) => {
  $(element1).fadeOut(1000, () => {
    $(element2).fadeIn(2000);
  });
};

const submitAction = () => {
  if (nameElement.value) {
    fadeEffect(form, partOne);
  }
};
