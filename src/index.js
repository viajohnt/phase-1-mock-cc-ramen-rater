// Write your code here
let currentRamen;
const ramenMenu = document.getElementById('ramen-menu');
const ramenRating = document.getElementById('rating-display');
const ramenComment = document.getElementById('comment-display');
const ramenForm = document.getElementById('new-ramen');
const ramenName = document.getElementById('name');
const ramenRestaurant = document.getElementById('restaurant');
const ramenImage = document.getElementById('detail-image');
ramenForm.addEventListener('submit', createRamen);

fetch("http://localhost:3000/ramens")
   .then(response => response.json())
   .then(ramens => ramens.forEach(renderRamen));  

function renderRamen(ramen) {
    const ramenMenuImage = document.createElement('img');
    ramenMenuImage.src = ramen.image;
    ramenMenu.appendChild(ramenMenuImage);
    ramenMenuImage.addEventListener('click', () => {
        ramenRating.innerText = ramen.rating;
        ramenComment.innerText = ramen.comment;
        ramenName.innerText = ramen.name;
        ramenRestaurant.innerText = ramen.restaurant;
        ramenImage.src = ramen.image;
    })  
}
function createRamen(event) {
    event.preventDefault();
    const newRamen = {
        name: document.getElementById("new-name").value,
        restaurant: document.getElementById("new-restaurant").value,
        image: document.getElementById("new-image").value,
        rating: document.getElementById("new-rating").value,
        comment: document.getElementById("new-comment").value
    }
    renderRamen(newRamen)
    event.target.reset();
}
// Create a delete button
// Define as constant on global scope
function deleteRamen() {
    document.querySelector(`#ramen-menu #id${currentRamen.id}`).remove();
}

