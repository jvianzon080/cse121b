/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ezra Vianzon",
    photo: 'images/profilePicture.jpg',
    favoriteFoods: [
      'Fried Chicken',
      'Hamburger',
      'Fries',
      'Sundae',
      'Peach Mango Pie'
    ],
    hobbies: ['Reading', 'Cooking', 'Sports', 'Movie Watching',],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: 'Pampanga, Philippines',
    length: '8 years'
  },
  {
    place: 'Bataan, Philippines',
    length: '2 years'
  },
  {
    place: 'Taguig, Philippines',
    length: '3 years'
  },
  {
    place: 'Banaybanay, Philippines',
    length: '7 years'
  },
  {
    place: 'Cebu, Philippines',
    length: '2 years'
  },
  {
    place: 'Davao, Philippines',
    length: '4 years'
  },
  {
    place: 'Tagum, Philippines',
    length: '2 years'
  },
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  let dl = document.querySelector('#places-lived');
  dl.appendChild(dt);
  dl.appendChild(dd);
});
