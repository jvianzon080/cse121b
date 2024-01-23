/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ezra Vianzon" ;
var currentYear = new Date().getFullYear();
console.log("Current Year: " + currentYear);
var profilePicture = 'images/profilePicture.jpg'
console.log("Profile Picture Path: " + profilePicture);



/* Step 3 - Element Variables */
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');
if (imageElement) {
    console.log('Profile Picture Element found:', imageElement);
  } else {
    console.error('Profile Picture Element not found.');
  }


/* Step 4 - Adding Content */
const nameElement = document.getElementById('name');
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */
const favoriteFoods = ["Fried Chicken", "Hamburger", "Fries", "Sundae", "Peach Mango Pie"]
foodElement.innerHTML = `<ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;
const newFavoriteFood = "Hotdog";
favoriteFoods.push(newFavoriteFood);
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;




