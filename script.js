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
  animalImage.src = "Images/Olimar.png";
  animalImage.alt = "A cute kitten";
}

// Dog
function showDog() {
  title.textContent = "This is a Dog!";
  animalImage.src = "Images/Ekko.jpeg";
  animalImage.alt = "A happy dog";
}
