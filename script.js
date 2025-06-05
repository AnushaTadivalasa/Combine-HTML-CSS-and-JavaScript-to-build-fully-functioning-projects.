// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting me!");
});

// To-Do List
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach(li => {
    tasks.push(li.childNodes[0].textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    taskInput.value = task;
    addTask();
  });
}

// Product Data
const products = [
  {
    name: "Laptop",
    price: 100000,
    category: "electronics",
    image: "https://th.bing.com/th/id/OIP.jtS23CrdNk0SdkIahKlOqwHaEo?w=316&h=197"
  },
  {
    name: "Smartphone",
    price: 2000,
    category: "electronics",
    image: "https://th.bing.com/th/id/OIP.-Tps1udTX4qMwmPKsajJowHaHa"
  },
  {
    name: "Headphones",
    price: 2500,
    category: "electronics",
    image: "https://th.bing.com/th/id/OIP.4rMdbVaV1IPcRgaVkixHigHaF7"
  },
  {
    name: "Smartwatch",
    price: 3000,
    category: "electronics",
    image: "https://m.media-amazon.com/images/I/613qFCwaEnL._SL1500_.jpg"
  },
  {
    name: "Shirt",
    price: 1000,
    category: "clothing",
    image: "https://th.bing.com/th/id/OPAC.o9wIAWeKXyPxDg474C474"
  },
  {
    name: "Jeans",
    price: 1500,
    category: "clothing",
    image: "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe"
  },
  {
    name: "Jacket",
    price: 2000,
    category: "clothing",
    image: "https://th.bing.com/th/id/OIP.z4VY-LkxBTLagzSWQ4VFswHaIy"
  },
  {
    name: "Shoes",
    price: 2500,
    category: "clothing",
    image: "https://th.bing.com/th/id/OIP.poQli54lcHQLwHHMcwgTWwHaNL"
  },
  {
    name: "Lehanga",
    price: 4000,
    category: "clothing",
    image: "https://th.bing.com/th/id/OIP.RtljN456xZC6jodiLU-YoQHaMV"
  },
  {
    name: "College Bags",
    price: 4000,
    category: "clothing",
    image: "https://th.bing.com/th/id/OIP.ATwgZEmNIGf7x0uzBzW7EgHaIX"
  },
  {
    name: "Saree",
    price: 2000,
    category: "clothing",
    image: "https://th.bing.com/th/id/OIP.IfCusDhNjIMjolf2-yzD8AHaJ4"
  },
  {
    name: "Juice jar mixture",
    price: 500,
    category: "electronics",
    image: "https://hermajestyworld.com/cdn/shop/files/S3f3379ace51045a0b23d5545d1bc114ej.webp?v=1735948538&width=1946"
  },
  {
    name: "Multipurpose cooker",
    price: 3000,
    category: "electronics",
    image: "https://th.bing.com/th/id/OIP.Pbhp3Tv1XCFq0Y99YHfdKwHaHb"
  },
  {
    name: "Shervani",
    price: 5000,
    category: "clothing",
    image: "https://th.bing.com/th/id/OIP.AcnKOjj9zAslvcko1EVJcQHaJQ"
  },
  {
    name: "Sunglasses",
    price: 1200,
    category: "accessories",
    image: "https://th.bing.com/th/id/R.56a999fa096e58bfa4e1be2c7cbd867a?rik=rTWlX%2fP7W2uFjQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f09%2fSunglasses.png&ehk=Hd%2f%2b49vJ3XbeDnywAOwxrc2UScPnZ04jn6Mp11fCaPA%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "Microwave Oven",
    price: 8000,
    category: "home",
    image: "https://th.bing.com/th/id/R.3f57d20a6a8d34f27e17d88aaf731a88?rik=g3yX3Y9cw0y9yw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmicrowave-png-hd-microwave-toaster-oven-png-image-microwave-oven-png-1325.png&ehk=40oSIgFQloxtUmO1maxnjS%2fXEjpiHfq4aZuC4kAC%2bVA%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "Lipstick Set",
    price: 1500,
    category: "beauty",
    image: "https://as1.ftcdn.net/v2/jpg/01/41/60/28/1000_F_141602871_i18wIKlQx2kLprv4zCe7jtjxq6oWPgJy.jpg"
  }
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const sortPrice = document.getElementById('sortPrice');
const wishlistItems = document.getElementById('wishlistItems');
const cartCountDisplay = document.getElementById('cartCount');
const offerDisplay = document.getElementById('offerMessage');

let cart = [];
let wishlist = [];

// Display Products
function displayProducts(list) {
  productList.innerHTML = '';
  list.forEach((product) => {
    const div = document.createElement('div');
    div.className = 'product';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const h3 = document.createElement('h3');
    h3.textContent = product.name;

    const p = document.createElement('p');
    p.textContent = `₹${product.price}`;

    const wishlistBtn = document.createElement('button');
    wishlistBtn.textContent = 'Add to Wishlist';
    wishlistBtn.onclick = () => addToWishlist(product, wishlistBtn);

    const cartBtn = document.createElement('button');
    cartBtn.textContent = 'Add to Cart';
    cartBtn.onclick = () => addToCart(product, cartBtn);

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(wishlistBtn);
    div.appendChild(cartBtn);

    productList.appendChild(div);
  });
}

// Add to Wishlist
function addToWishlist(product, btn) {
  if (!wishlist.some(item => item.name === product.name)) {
    wishlist.push(product);
    updateWishlistDisplay();
  }
  animateButton(btn);
}

// Add to Cart
function addToCart(product, btn) {
  cart.push(product);
  updateCartDisplay();
  updateOffer();

  // Add animation class
  btn.classList.add('add-to-cart-animate');
  setTimeout(() => btn.classList.remove('add-to-cart-animate'), 600);

  // Celebrate with confetti
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Wishlist Display
function updateWishlistDisplay() {
  wishlistItems.innerHTML = '';
  wishlist.forEach(item => {
    const div = document.createElement('div');
    div.className = 'wishlist-item';
    div.innerHTML = `<img src="${item.image}" width="100"><p>${item.name}</p>`;
    wishlistItems.appendChild(div);
  });
}

// Cart Count
function updateCartDisplay() {
  cartCountDisplay.textContent = cart.length;
}

// Offer System
function updateOffer() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  let offer = '';
  if (total >= 10000) {
    offer = "🎉 You win a 1 gram gold necklace and earrings set!";
  } else if (total >= 5000) {
    offer = "🎁 You win ₹1000 coupon coins!";
  } else if (total >= 3000) {
    offer = "🍽️ You win a dinner set!";
  } else {
    offer = "🛒 Add more items to unlock rewards!";
  }
  offerDisplay.textContent = `Cart Total: ₹${total} - ${offer}`;
}

// Filter and Sort
function filterAndSort() {
  let filtered = [...products];
  const cat = categoryFilter.value;
  const sort = sortPrice.value;

  if (cat !== 'all') filtered = filtered.filter(p => p.category === cat);
  if (sort === 'low') filtered.sort((a, b) => a.price - b.price);
  else filtered.sort((a, b) => b.price - a.price);

  displayProducts(filtered);
}

// Animate Button
function animateButton(button) {
  if (!button) return;
  button.classList.add('bounce');
  setTimeout(() => button.classList.remove('bounce'), 400);
}

// On Load
window.onload = () => {
  loadTasks();
  displayProducts(products);
  filterAndSort();
};

// Event Listeners
categoryFilter.addEventListener('change', filterAndSort);
sortPrice.addEventListener('change', filterAndSort);
