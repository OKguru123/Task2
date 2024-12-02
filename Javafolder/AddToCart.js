
// const neWele =document.createElement('div');
// console.log("product order",neWele);
// neWele.innerHTML="runnning product";
// neWele.style.color='pink';

// document.body.appendChild(neWele);
// const Cartdata= JSON.parse(localStorage.getItem('cart'));
// console.log(localStorage.getItem('cart'));

// console.log(Cartdata)

//  if (Cartdata.length===0){
//     Cartdata.forEach(item => {
//         console.log("working not");


//         console.log(`ID: ${item.id}, Title: ${item.title}, Price: ${item.price}`);

//      });

//      console.log("working");

//     } 

//      else{ 
      
//         console.log(" working ");
//      }



// Function to load cart items from localStorage
// Function to load cart items from localStorage
function loadCartFromLocalStorage() {
   const cartData = JSON.parse(localStorage.getItem('cart')) || [];
   return cartData;
}

// Function to create the Add to Cart page
function renderCartPage() {
   // Get cart data
   const cartData = loadCartFromLocalStorage();

   // Create main container
   const cartPage = document.createElement('div');
   cartPage.style.cssText = `
       width: 100%;
       padding: 20px;
       display: flex;
       flex-direction: column;
       align-items: center;
       background-color: #f9f9f9;
       font-family: Arial, sans-serif;
   `;

   // Page title
   const pageTitle = document.createElement('h1');
   pageTitle.innerText = "Your Cart";
   pageTitle.style.cssText = `
       font-size: 2rem;
       margin-bottom: 20px;
       color: #333;
   `;
   cartPage.appendChild(pageTitle);

   // Create container for cart items
   const cartContainer = document.createElement('div');
   cartContainer.style.cssText = `
       width: 80%;
       display: flex;
       flex-direction: column;
       gap: 20px;
   `;
   cartPage.appendChild(cartContainer);

   // Render each cart item
   if (cartData.length > 0) {
       cartData.forEach(item => {
           // Create card for each item
           const cartItem = document.createElement('div');
           cartItem.style.cssText = `
               display: flex;
               align-items: center;
               justify-content: space-between;
               background-color: white;
               border: 1px solid #ddd;
               border-radius: 8px;
               padding: 10px;
               box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
           `;

           // Item image
           const itemImage = document.createElement('img');
           itemImage.src = item.image;
           itemImage.alt = item.title;
           itemImage.style.cssText = `
               width: 80px;
               height: 80px;
               border-radius: 4px;
           `;
           cartItem.appendChild(itemImage);

           // Item details
           const itemDetails = document.createElement('div');
           itemDetails.style.cssText = `
               flex: 1;
               margin-left: 20px;
           `;
           const itemTitle = document.createElement('h2');
           itemTitle.innerText = item.title;
           itemTitle.style.cssText = `
               font-size: 1.2rem;
               margin: 0;
               color: #333;
           `;
           const itemPrice = document.createElement('p');
           itemPrice.innerText = `$${item.price}`;
           itemPrice.style.cssText = `
               font-size: 1rem;
               color: #555;
           `;
           itemDetails.appendChild(itemTitle);
           itemDetails.appendChild(itemPrice);
           cartItem.appendChild(itemDetails);

           // Remove button
           const removeButton = document.createElement('button');
           removeButton.innerText = "Remove";
           removeButton.style.cssText = `
               padding: 10px 15px;
               border: none;
               border-radius: 5px;
               background-color: red;
               color: white;
               cursor: pointer;
               font-size: 0.9rem;
           `;
           removeButton.addEventListener('click', () => {
               removeFromCart(item.id);
               renderCartPage(); // Re-render cart after removal
           });
           cartItem.appendChild(removeButton);

           // Append to container
           cartContainer.appendChild(cartItem);
       });
   } else {
       // Display message if cart is empty
       const emptyMessage = document.createElement('p');
       emptyMessage.innerText = "Your cart is empty.";
       emptyMessage.style.cssText = `
           font-size: 1.2rem;
           color: #555;
           text-align: center;
       `;
       cartContainer.appendChild(emptyMessage);
   }

   // Clear cart button
   const clearCartButton = document.createElement('button');
   clearCartButton.innerText = "Clear Cart";
   clearCartButton.style.cssText = `
       margin-top: 20px;
       padding: 10px 20px;
       border: none;
       border-radius: 5px;
       background-color: #333;
       color: white;
       cursor: pointer;
       font-size: 1rem;
   `;
   clearCartButton.addEventListener('click', () => {
       localStorage.removeItem('cart');
       renderCartPage(); // Re-render cart after clearing
   });
   cartPage.appendChild(clearCartButton);

   // Append cart page to body
   document.body.innerHTML = ""; // Clear the body
   document.body.appendChild(cartPage);
}

// Function to remove an item from the cart
function removeFromCart(id) {
   const cartData = loadCartFromLocalStorage();
   const updatedCart = cartData.filter(item => item.id !== id);
   localStorage.setItem('cart', JSON.stringify(updatedCart));
}

// Initial render of the cart page
renderCartPage();
