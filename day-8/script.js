const products = [
  { id: 1,   image: "images/1.png" , name: "T-Shirt", price: 15 },
  { id: 2, image: "images/2.png", name: "Jeans", price: 40 },
  { id: 3, image: "images/3.png", name: "Sneakers", price: 60 }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById("productList");
    products.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product-card");
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPriceEl.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

displayProducts();
