const navbar = document.createElement("div");
navbar.style.display = "flex";

navbar.style.justifyContent = "space-between";
navbar.style.alignItems = "center";
navbar.style.padding = "10px 20px";
navbar.style.backgroundColor = "#333";
navbar.style.color = "#fff";

const navbarLinks = document.createElement("div");
navbar.style.position = "relative";
navbarLinks.style.display = "flex";
navbarLinks.style.left = "3opx";
navbarLinks.style.left = "20px";
navbarLinks.style.display = "flex";
navbar.style.padding = "8px";

navbar.append(navbarLinks);

const Home = document.createElement("a");
Home.innerText = "LOGO";
Home.href = "#";

Home.style.textDecoration = "none";
Home.style.margin = "10px";

Home.style.color = "White";

navbarLinks.appendChild(Home);

const GoTOCart = document.createElement("a");
GoTOCart.innerText = "GoTOCart";
GoTOCart.style.margin = "10px";

GoTOCart.style.textDecoration = "none";
GoTOCart.addEventListener("click", () => {
  const script = document.createElement("script");
  script.src = "./Javafolder/AddToCart.js";
  document.body.appendChild(script);
});

GoTOCart.style.color = "White";

navbarLinks.appendChild(GoTOCart);

const cartCountContainer = document.createElement("div");
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

cartCountContainer.innerText = "0";
navbar.appendChild(cartCountContainer);
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCountContainer.innerText = cart.length;

  if (cart.length === 0) {
    cartCountContainer.style.backgroundColor = "gray";
  } else {
    cartCountContainer.style.backgroundColor = "#007bff";
  }
}

updateCartCount();

setInterval(updateCartCount, 1000);

document.body.appendChild(navbar);

const searchbar = document.createElement("input");

searchbar.placeholder = "Search...";

searchbar.type = "text";

searchbar.style.color = "black";

searchbar.style.padding = "5px";
searchbar.style.border = "none";
searchbar.style.borderRadius = "5px";
searchbar.style.cursor = "pointer";
searchbar.addEventListener("mouseover", () => {
  searchbar.style.backgroundColor = "antiquewhite";
});
searchbar.addEventListener("mouseleave", () => {
  searchbar.style.backgroundColor = "white";
});

navbarLinks.append(searchbar);

document.body.appendChild(navbar);
