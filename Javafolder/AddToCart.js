function loadCartFromLocalStorage() {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  return cartData;
}

function renderCartPage() {
  const cartData = loadCartFromLocalStorage();

  const cartPage = document.createElement("div");
  cartPage.style.cssText = `
       width: 100%;
       padding: 20px;
       display: flex;
       flex-direction: column;
       align-items: center;
       background-color: #f9f9f9;
       font-family: Arial, sans-serif;
   `;

  const pageTitle = document.createElement("h1");
  pageTitle.innerText = "Your Cart";
  pageTitle.style.cssText = `
       font-size: 2rem;
       margin-bottom: 20px;
       color: #333;
   `;
  cartPage.appendChild(pageTitle);

  const cartContainer = document.createElement("div");
  cartContainer.style.cssText = `
       width: 80%;
       display: flex;
       flex-direction: column;
       gap: 20px;
   `;
  cartPage.appendChild(cartContainer);

  if (cartData.length > 0) {
    cartData.forEach((item) => {
      const cartItem = document.createElement("div");
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

      const itemImage = document.createElement("img");
      itemImage.src = item.image;
      itemImage.alt = item.title;
      itemImage.style.cssText = `
               width: 80px;
               height: 80px;
               border-radius: 4px;
           `;
      cartItem.appendChild(itemImage);

      const itemDetails = document.createElement("div");
      itemDetails.style.cssText = `
               flex: 1;
               margin-left: 20px;
           `;
      const itemTitle = document.createElement("h2");
      itemTitle.innerText = item.title;
      itemTitle.style.cssText = `
               font-size: 1.2rem;
               margin: 0;
               color: #333;
           `;
      const itemPrice = document.createElement("p");
      itemPrice.innerText = `$${item.price}`;
      itemPrice.style.cssText = `
               font-size: 1rem;
               color: #555;
           `;
      itemDetails.appendChild(itemTitle);
      itemDetails.appendChild(itemPrice);
      cartItem.appendChild(itemDetails);

      const removeButton = document.createElement("button");
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
      removeButton.addEventListener("click", () => {
        removeFromCart(item.id);
        renderCartPage();
      });
      cartItem.appendChild(removeButton);

      cartContainer.appendChild(cartItem);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.innerText = "Your cart is empty.";
    emptyMessage.style.cssText = `
           font-size: 1.2rem;
           color: #555;
           text-align: center;
       `;
    cartContainer.appendChild(emptyMessage);
  }

  const clearCartButton = document.createElement("button");
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
  clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    renderCartPage();
  });
  cartPage.appendChild(clearCartButton);

  document.body.innerHTML = "";
  document.body.appendChild(cartPage);
}

function removeFromCart(id) {
  const cartData = loadCartFromLocalStorage();
  const updatedCart = cartData.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

renderCartPage();
