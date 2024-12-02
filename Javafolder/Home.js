

// // import products from "./productdata.js";
// // const products = require('./productdata');
// // const products = require('./products.js');
// // import products from "./productdata.js"
// // console.log(products);

const homepage = document.createElement('div');
//  homepage.style.background = 'Bisque';
//  homepage.innerText = 'HOME PAGE'
//  homepage.innerText = 'HOME PAGE';
// homepage.style.width = '100%';
// homepage.style.display = 'flex';
// homepage.style.height = '100vh';
// homepage.style.justifyContent = 'center';
// homepage.style.alignItems = 'center';
homepage.style.cssText = `
    background: white;
    width: 100%;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
// // CRAETING a card container;

// homepage.innerText = 'HOME PAGE';
//  const cardContainer=document.createElement('div');
//  cardContainer.innerHTML="CARD CONTAINER";
//  cardContainer.id='product-container';

//  cardContainer.style.cssText =`
//   background: pink;
//     width: 95%;
//     height: 95%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//  `;

//  
  // Create a container for the product cards
  const productContainer = document.createElement('div');
  productContainer.id = 'product-container';

  // Apply Flexbox styles to the container
  productContainer.style.display = 'flex';
  productContainer.style.flexWrap = 'wrap';
  productContainer.style.justifyContent = 'space-around';
  productContainer.style.gap = '20px';
  productContainer.style.padding = '20px';

const apiUrl = 'https://dummyjson.com/products';
fetchData(apiUrl);

function fetchData(apiUrl) {
    // Using the Fetch API to make a GET request
    fetch(apiUrl)
        .then(response => {
            // Check if the response is OK 
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Parse the JSON data from the response
            return response.json();
        })
        .then(data => {
            // Handle the data
            console.log(data); // Check the structure of data

            // Create a container for the product cards
            // const productContainer = document.createElement('div');
            // productContainer.id = 'product-container';

            // // Apply Flexbox styles to the container
            // productContainer.style.display = 'flex';
            // productContainer.style.flexWrap = 'wrap';
            // productContainer.style.justifyContent = 'space-around';
            // productContainer.style.gap = '20px';
            // productContainer.style.padding = '20px';

            // Loop through the products array and create each card
            data.products.forEach(product => {
                // Create a card for each product
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                // Apply basic styles to the product card
                productCard.style.flex = '1 1 150px';  // Allow card to resize with a minimum width of 200px
                productCard.style.border = '1px solid #ddd';
                productCard.style.borderRadius = '8px';
                productCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                productCard.style.textAlign = 'center';
                productCard.style.padding = '20px';
                productCard.style.backgroundColor = 'gray';

                const productImage = product.thumbnail; // Using thumbnail as product image
                const productTitle = product.title;     // Product title
                const productPrice = product.price;     // Product price

                // Add content to the product card (image, title, price)
                productCard.innerHTML = `
            <img src="${productImage}" alt="${productTitle}" style="width: 100%; height: auto; border-radius: 8px;" />
            <h2 style="font-size: 1.2rem; margin: 10px 0;">${productTitle}</h2>
            <p style="font-size: 1.1rem; color: #333;">$${productPrice}</p>
            <button style="
        padding: 10px 20px; 
             background-color: green; 
           color: white; 
           border: none; 
         border-radius: 5px; 
             cursor: pointer;
             
             ;
             class="add-to-cart-button" 
               id="add-to-cart-button-${product.id}" 
                 " data-id="${product.id}" data-title="${productTitle}" data-image="${productImage}" data-price="${productPrice}">
               Add to Cart
              </button>
          `;
          const buttonclicked=  productCard.querySelector('button')
          buttonclicked.addEventListener('click', function () {
            const item = {
              id: this.getAttribute('data-id'),
              title: this.getAttribute('data-title'),
              image: this.getAttribute('data-image'),
              price: this.getAttribute('data-price'),
            };
            // here how to do it 
            
            if (this.style.backgroundColor === 'green') {
                // If it's green, change it to red and change text to "Remove"
                this.style.backgroundColor = 'red';
                this.innerText = 'Remove';
                // You can also call a function to remove the item from the cart here
                
                addToCart(item);
            } else {
                // If it's not green, change it to green and change text to "Add to Cart"
                this.style.backgroundColor = 'green';
                this.innerText = 'Add to Cart';
                // Add the item to the cart
                removeFromCart(item);
            }
          });
                // Append the card to the container
                productContainer.appendChild(productCard);
            });

            // Append the container to the body of the HTML page
            homepage.appendChild(productContainer);
            document.body.append(homepage);
        })
        .catch(error => {
            // Handle any errors that occur during the fetch process
            console.error('There was a problem with the fetch operation:', error);
        });
}



function addToCart(item) {
    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    if (cart.find(cartItem => cartItem.id === item.id)) {
        alert('Item is already in the cart!');
        return;
    }


    cart.push(item);
  
    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Display a confirmation message
    alert(`${item.title} has been added to the cart!`);
}




   function removeFromCart(item) {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

   
    cart = cart.filter(cartItem => cartItem.id !== item.id);
      console.log("cartdatajhjk",cart)
    
    localStorage.setItem('cart', JSON.stringify(cart));


    alert(`${item.title} has been removed from the cart!`);
}


