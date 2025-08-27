// Access the dom
/*
document.getElementById("id")
document.querySelector("class")
document.querySelectorAll("class")
*/


// Task 1
/*
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
*/


// Task 2
/*
// Select the <ul> by ID
const shoppingList = document.getElementById("shopping-list");

function addItem() {
  // 1. Create a new <li>
  const newItem = document.createElement("li");

  // 2. Create a text node with "Eggs"
  const textNode = document.createTextNode("Eggs");

  // 3. Append the text node into the <li>
  newItem.appendChild(textNode);

  // 4. Append the <li> into the <ul>
  shoppingList.appendChild(newItem);

   // ✅ When the <li> is clicked, remove it
  newItem.onclick = function () {
    newItem.remove();
  };
}
*/


// Task 3
/*
const myLink = document.getElementById('myLink');
const myBtn = document.getElementById('myBtn');

myLink.addEventListener('click', function(event) {
  event.preventDefault();
  alert("Default stopped!");
});

myBtn.addEventListener('click', function(event) {
  const button = event.currentTarget;
  button.classList.add('red');
});
*/


// Task 4
/*
const firstNameInput = document.getElementById('firstName');
const greetBtn = document.getElementById('greetBtn');
const output = document.getElementById('output');

greetBtn.addEventListener('click', function(event) {
  const name = firstNameInput.value;  // get input value
  console.log(name);                  // log it
  output.textContent = "Hello " + name; // show greeting
});
*/