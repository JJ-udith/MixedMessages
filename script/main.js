const form = document.getElementById("form");
const submitButton = document.getElementById("submit-btn");
const nameElement = document.getElementById("name");

// Fade Effect
const fadeEffect = (element) => {
  element.className = "fadeIn";
  setTimeout(() => {
    $(element).css("display", "none");
  }, 1000);
};

const clickAction = () => {
  fadeEffect(form);
};
