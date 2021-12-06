// intro context object fortune

//4 arrays, one for each categorie
//one randomize function
//randomized number as index in array
//4 output strings
const intro = [
    "The atmosphere is asking for permission", 
    "There is something big happening",
    "My crystal ball is shaking...",
    "I need all my powers for this fortune",
    "Well, if you ask me...",
    "I'm not sure how to tell you this",
    "Mmmmhhhh...",
    "Is that smoke? How doid that happen? Anyway.",
    "Your fortune is my fortune.",
    "On your marks. Get set. Go."
]
const anObject = [
    "A full moon",
    "A pile of money",
    "A black figure",
    "A black cat",
    "The dark lord",
    "A blazing sun",
    "An eclipse",
    "A tall woman",
    "Saturn",
    "A vampire"
]

const context = [
    "forest",
    "dark cloud",
    "dog's house",
    "little shelter",
    "toilet",
    "giant belly",
    "old women's purse",
    "man's heart",
    "lake",
    "tree house"
]

const fortune = [
    "will give you a lot of pleasure",
    "is going to make you extremely sad.",
    "has absolutely nothing to do with your mother.",
    "is the proof that you are in a simulation.",
    "might give you a headache.",
    "has got to be a bad sign!",
    "will make you forget all your sorrows.",
    "will pee on you.",
    "will make you wanna kill yourself. Don't do it!",
    "may come to your birthday party.",
    "is going to marry you."    
]

const rand = () => {
    return Math.floor(Math.random() * 10)
}

let chosenIntro = intro[rand()];
let chosenObject = anObject[rand()];
let chosenContext = context[rand()];
let chosenFortune = fortune[rand()];