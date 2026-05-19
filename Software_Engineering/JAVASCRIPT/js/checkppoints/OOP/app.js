class Product {
  constructor(id, name, price, quantity = 0, heart = false, description = "", image = "") {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.heart = heart;
    this.description = description;
    this.image = image;
  }
}

class ShoppingCartItem {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class Shoppingcart {
  constructor(items = []) {
    this.items = items;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
  }

  addItem(product) {
    const cartItem = this.items.find((item) => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity += 1;
      return;
    }
    this.items.push(new ShoppingCartItem(product, 1));
  }

  removeItem(productId) {
    const cartItem = this.items.find((item) => item.product.id === productId);
    if (!cartItem) return;

    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      return;
    }

    this.clearItem(productId);
  }

  clearItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  toggleLike(productId) {
    const cartItem = this.items.find((item) => item.product.id === productId);
    if (!cartItem) return;
    cartItem.product.heart = !cartItem.product.heart;
  }

  displayCartItems() {
    document.querySelector(".total").textContent = `${this.getTotalPrice()} $`;

    const itemList = document.querySelector(".list-products");
    itemList.innerHTML = this.items
      .map(
        (item) => `
          <div class="card-body">
            <div class="card" style="width: 18rem">
              <img src="${item.product.image}" class="card-img-top" alt="${item.product.name}" />
              <div class="card-body">
                <h5 class="card-title">${item.product.name}</h5>
                <p class="card-text">${item.product.description}</p>
                <h4 class="unit-price">${item.product.price} $</h4>
                <div>
                  <i class="fas fa-plus-circle action-btn" data-action="plus" data-id="${item.product.id}"></i>
                  <span class="quantity">${item.quantity}</span>
                  <i class="fas fa-minus-circle action-btn" data-action="minus" data-id="${item.product.id}"></i>
                </div>
                <div>
                  <i class="fas fa-trash-alt action-btn" data-action="delete" data-id="${item.product.id}"></i>
                  <i class="${item.product.heart ? "fas" : "far"} fa-heart action-btn ${item.product.heart ? "liked" : ""}" data-action="heart" data-id="${item.product.id}"></i>
                </div>
              </div>
            </div>
          </div>
        `
      )
      .join("");
  }
}

const products = [
  new Product(1, "Baskets", 100, 0, false, "This is a basket", "./assets/baskets.png"),
  new Product(2, "Socks", 20, 0, false, "This is a sock", "./assets/socks.png"),
  new Product(3, "Bag", 50, 0, false, "This is a bag", "./assets/bag.png"),
];

const cart = new Shoppingcart(products.map((product) => new ShoppingCartItem(product, 1)));

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.querySelector(".list-products");

  itemList.addEventListener("click", (event) => {
    const button = event.target.closest(".action-btn");
    if (!button) return;

    const productId = Number(button.dataset.id);
    const action = button.dataset.action;
    const product = products.find((item) => item.id === productId);

    if (!product) return;

    if (action === "plus") {
      cart.addItem(product);
    } else if (action === "minus") {
      cart.removeItem(productId);
    } else if (action === "delete") {
      cart.clearItem(productId);
    } else if (action === "heart") {
      cart.toggleLike(productId);
    }

    cart.displayCartItems();
  });

  cart.displayCartItems();
});

