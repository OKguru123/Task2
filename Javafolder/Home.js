const homepage = document.createElement("div");

homepage.style.cssText = `
    background: white;
    width: 100%;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const productContainer = document.createElement("div");
productContainer.id = "product-container";

productContainer.style.display = "flex";
productContainer.style.flexWrap = "wrap";
productContainer.style.justifyContent = "space-around";
productContainer.style.gap = "20px";
productContainer.style.padding = "20px";

const apiUrl = "https://dummyjson.com/products";
fetchData(apiUrl);

function fetchData(apiUrl) {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      return response.json();
    })
    .then((data) => {
      data.products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.style.flex = "1 1 150px";
        productCard.style.border = "1px solid #ddd";
        productCard.style.borderRadius = "8px";
        productCard.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        productCard.style.textAlign = "center";
        productCard.style.padding = "20px";
        productCard.style.backgroundColor = "gray";

        const productImage = product.thumbnail;
        const productTitle = product.title;
        const productPrice = product.price;

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
        const buttonclicked = productCard.querySelector("button");
        buttonclicked.addEventListener("click", function () {
          const item = {
            id: this.getAttribute("data-id"),
            title: this.getAttribute("data-title"),
            image: this.getAttribute("data-image"),
            price: this.getAttribute("data-price"),
          };

          if (this.style.backgroundColor === "green") {
            this.style.backgroundColor = "red";
            this.innerText = "Remove";

            addToCart(item);
          } else {
            this.style.backgroundColor = "green";
            this.innerText = "Add to Cart";

            removeFromCart(item);
          }
        });

        productContainer.appendChild(productCard);
      });

      homepage.appendChild(productContainer);
      document.body.append(homepage);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.find((cartItem) => cartItem.id === item.id)) {
    alert("Item is already in the cart!");
    return;
  }

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${item.title} has been added to the cart!`);
}

function removeFromCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((cartItem) => cartItem.id !== item.id);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${item.title} has been removed from the cart!`);
}
