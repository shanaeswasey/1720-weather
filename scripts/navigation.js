// Store the selected elements that we are going to use.
const hambutton = document.querySelector('#hamburger') // Finds the hamburger button on the page
const mainnav = document.querySelector('#navbar') // Finds the navigation menu on the page

//Toggle class on or off- change hamburger menu, show and hide navigation menu
// Runs this code when the hamburger button is clicked
hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show') // Adds or removes the "show" class on the hamburger button
    mainnav.classList.toggle('show') // Adds or removes the "show" class on the navigation menu
})