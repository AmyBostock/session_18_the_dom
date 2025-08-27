// Access the dom
/*
document.getElementById("id")
document.querySelector("class")
document.querySelectorAll("class")
*/


// Task 1

const title = document.getElementById("title");
const animalImage = document.getElementById("animal");

// Cat
function showCat() {
  title.textContent = "This is a Cat!";
  animalImage.src = "https://placekitten.com/300/300"; // kitten image
  animalImage.alt = "A cute kitten";
}

// Dog
function showDog() {
  title.textContent = "This is a Dog!";
  animalImage.src = "https://images.dog.ceo/breeds/labrador/n02099712_5641.jpg"; // dog image
  animalImage.alt = "A happy dog";
}
