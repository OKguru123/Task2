// Navbar2.js
// use a immediate inviked functions to over come tthe variable name conflict
const navbar = document.createElement('div');
navbar.style.display = 'flex';
// navbar.style.position='relative';
navbar.style.justifyContent = 'space-between';
navbar.style.alignItems = 'center';
navbar.style.padding = '10px 20px';
navbar.style.backgroundColor = '#333';
navbar.style.color = '#fff';
// navbar.innerHTML="Navbar";

// navbar.style.fontFamily = 'Arial, sans-serif';


const navbarLinks = document.createElement('div');
navbar.style.position = 'relative';
navbarLinks.style.display = "flex";
navbarLinks.style.left = '3opx';
navbarLinks.style.left = '20px';
navbarLinks.style.display = 'flex';
navbar.style.padding = '8px';
// navbar.style.margin='8px';

navbar.append(navbarLinks);


// navbarLinks.style.color='White';
const Home = document.createElement('a');
Home.innerText = 'LOGO';
Home.href = '#';

Home.style.textDecoration = 'none';
Home.style.margin = '10px';

Home.style.color = 'White';
//  console.log(navbarLinks);

navbarLinks.appendChild(Home);


//  craete GoTOCart page
const GoTOCart = document.createElement('a');
GoTOCart.innerText = 'GoTOCart';
GoTOCart.style.margin = '10px';
// GoTOCart.href = 'AddTocart.js';
GoTOCart.style.textDecoration = 'none';
GoTOCart.addEventListener('click', ()=>{
    
    const script = document.createElement('script');
    script.src = './Javafolder/AddToCart.js'; // Path to your AddTocart.js file
    document.body.appendChild(script);

}) 



GoTOCart.style.color = 'White';
//  console.log(navbarLinks);

navbarLinks.appendChild(GoTOCart);



const cartCountContainer = document.createElement('div');
cartCountContainer.style.cssText = `
    font-size: 1.2rem;
    color: white;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: #007bff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

cartCountContainer.innerText = '0'; 
navbar.appendChild(cartCountContainer);
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountContainer.innerText = cart.length; 

   
    if (cart.length === 0) {
        cartCountContainer.style.backgroundColor = 'gray'; // Empty cart indicator
    } else {
        // console.log( cartCountContainer.innerText);

        cartCountContainer.style.backgroundColor = '#007bff'; // Non-empty cart indicator
    }
}

// Initial load: Update the cart count
updateCartCount();

// Periodic update to handle changes in `localStorage` from other parts of the app
setInterval(updateCartCount, 1000); // Check every 500ms


// Add the navbar to the body
document.body.appendChild(navbar);









    
//  console.log(navbarLinks);
// craete a inpute seach box;
//

const searchbar = document.createElement('input');


searchbar.placeholder = "Search...";


searchbar.type = "text";

// Style the search bar
searchbar.style.color = 'black';
// searchbar.style.backgroundColor = 'gray';
searchbar.style.padding = '5px';
searchbar.style.border = 'none';
searchbar.style.borderRadius = '5px';
searchbar.style.cursor = 'pointer';
searchbar.addEventListener('mouseover', () => {
    searchbar.style.backgroundColor = 'antiquewhite'
});
searchbar.addEventListener('mouseleave', () => {
    searchbar.style.backgroundColor = 'white'

})
// Append the search bar to navbarLinks
navbarLinks.append(searchbar);














document.body.appendChild(navbar);
// craeting a locastorage
// localStorage.setItem('cart', JSON.stringify([]));
