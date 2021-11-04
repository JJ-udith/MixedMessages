// Sample Sentence Structures
const intros = [
  "The atmosphere is asking for permission.",
  "There is something big happening.",
  "My crystal ball is shaking...",
  "I need all my powers for this fortune.",
  "Well, if you ask me...",
  "I'm not sure how to tell you this.",
  "Mmmmhhhh...",
  "Is that smoke? How does that happened? Anyway.",
  "Your fortune is my fortune.",
  "On your marks. Get set. Go.",
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
  "forest",
  "dark cloud",
  "dog's house",
  "little shelter",
  "toilet",
  "giant belly",
  "old women's purse",
  "man's heart",
  "lake",
  "tree house",
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

// Generate Random Input
const randomGenerator = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Input Name
const inputName = "";

// Generate Random Message
const randomMessages = () => {
  if (inputName) {
    console.log(
      `${randomGenerator(intros)} Dear ${inputName}, I see ${randomGenerator(
        objects
      )}, in a ${randomGenerator(contexts)}, that ${randomGenerator(events)}`
    );
  } else {
    console.log(
      `${randomGenerator(intros)} I see ${randomGenerator(
        objects
      )}, in a ${randomGenerator(contexts)}, that ${randomGenerator(events)}`
    );
  }
};

randomMessages();
