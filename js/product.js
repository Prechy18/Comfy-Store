const mobileMenuIcon = document.querySelector('.mobile-menu-icon i'); // target the <i>
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuIcon.addEventListener('click', () => {
  // toggle menu
  mobileNav.classList.toggle('show');

  // toggle icon between bars and X
  mobileMenuIcon.classList.toggle('fa-bars');
  mobileMenuIcon.classList.toggle('fa-x');
  });


  const cards = [
    {
      id:"prod-1",
      img: "/images/light.jpeg" ,
      label: "Avant-Garde Lamp",
      price: 139.99,
      link: "prod-details.html",
      company: "Modenza",
      categories: "Table , all",
      freeShipping: true,
    },
  
    {
      id:"prod-2",
      img: "/images/chair.jpeg",
      label: "Chic Chair",
      price: 329.9,
      link: "prod-details.html",
      company: "Luxora",
      categories: "Kids , Chair , all",
      freeShipping: true,
    },
  
    {
      id:"prod-3",
      img: "/images/coffee.jpeg",
      label: "Coffee Table",
      price: 159.99,
      link: "prod-details.html",
      company: "Modenza",
      categories: "Table , all",
      freeShipping: false,
    },
  
    {
      id:"prod-4",
      img: "/images/bed.jpeg",
      label: "Comfy Bed",
      price: 729.99,
      link: "prod-details.html",
      company: "Homestead",
      categories: "Beds , all",
      freeShipping: false,
    },
  
    {
      id:"prod-5",
      img: "/images/sofa.jpeg",
      label: "Contemporary Sofa",
      price: 559.99,
      link: "prod-details.html",
      company: "Comfora",
      categories: "Sofas , all",
      freeShipping: true,
    },
  
    {
      id:"prod-6",
      img: "/images/bed2.jpeg",
      label: "Cutting-Edge Bed",
      price: 679.99,
      link: "prod-details.html",
      company: "Homestead",
      categories: "Beds , all",
      freeShipping: true,
    },
  
    {
      id:"prod-7",
      img: "/images/book.jpeg",
      label: "Futuristic Shelves",
      price: 339.99,
      link: "prod-details.html",
      company: "Luxora",
      categories: "Kids , all",
      freeShipping: true,
    },
  
    {
      id:"prod-8",
      img: "/images/glass.jpeg",
      label: "Glass Table",
      price: 159.99,
      link: "prod-details.html",
      company: "Modenza",
      categories: "Table , all",
      freeShipping: true,
    },
  
    {
      id:"prod-9",
      img: "/images/king.webp",
      label: "King Bed",
      price: 189.99,
      link: "prod-details.html",
      company: "Homestead",
      categories: "Beds , all",
      freeShipping: true,
    },
  
    {
      id:"prod-10",
      img: "/images/lounge.webp",
      label: "Lounge Chair",
      price: 259.99,
      link: "prod-details.html",
      company: "Luxora",
      categories: "Chair , all",
      freeShipping: false,
    },
  
    {
      id:"prod-11",
      img: "/images/mini.jpeg",
      label: "Minimalist Shelves",
      price: 439.99,
      link: "prod-details.html",
      company: "Artifex",
      categories: "Beds , all",
      freeShipping: true,
    },
  
    {
      id:"prod-12",
      img: "/images/morden.jpeg",
      label: "Morden Sofa",
      price: 299.99,
      link: "prod-details.html",
      company: "Comfora",
      categories: "Sofas , all",
      freeShipping: true,
    },
  
    {
      id:"prod-13",
      img: "/images/morden2.webp",
      label: "Modern Table",
      price: 389.99,
      link: "prod-details.html",
      company: "Modenza",
      categories: "Table , all",
      freeShipping: false,
    },
  
    {
      id:"prod-14",
      img: "//images/recli.jpeg",
      label: "Reclining Sofa",
      price: 329.99,
      link: "prod-details.html",
      company: "Comfora",
      categories: "Sofas , all",
      freeShipping: true,
    },
  
    {
      id:"prod-15",
      img: "/images/sect.jpeg",
      label: "Sectional Sofa",
      price:359.99,
      link: "prod-details.html",
      company: "Comfora",
      categories: "Sofas , all",
      freeShipping: true,
    },
  
    {
      id:"prod-16",
      img: "/images/sleek.jpeg",
      label: "Sleek Bed",
      price: 539.99,
      link: "prod-details.html",
      company: "Homestead",
      categories: "Beds , all",
      freeShipping: false,
    },
  
    {
      id:"prod-17",
      img: "/images/sleek2.jpeg",
      label: "Sleek Chair",
      price: 199.99,
      link: "prod-details.html",
      company: "Luxora",
      categories: "Chair , all",
      freeShipping: false,
    },
  
    {
      id:"prod-18",
      img: "/images/stream.webp",
      label: "Streamlined Table",
      price: 409.99,
      link: "prod-details.html",
      company: "Modenza",
      categories: "Table , all",
      freeShipping: false,
    },
  
    {
      id:"prod-19",
      img: "/images/stylish.jpeg",
      label: "Stylish Bed",
      price: 599.99,
      link: "prod-details.html",
      company: "Homestead",
      categories: "Beds, all",
      freeShipping: true,
    },
  
    {
      id:"prod-20",
      img: "/images/toy.webp",
      label: "Toy shelf",
      price: 149.99,
      link: "prod-details.html",
      company: "Luxora",
      categories: "Kids , all",
      freeShipping: true,
    },
  
    {
      id:"prod-21",
      img: "/images/velvet.jpeg",
      label: "Velvet Sofa",
      price: 499.99,
      link: "prod-details.html",
      company: "Luxora",
      categories: "Sofas , all",
      freeShipping: true,
    },
  
    {
      id:"prod-22",
      img: "/images/wooden.webp",
      label: "Wooden Shelves",
      price: 299.99,
      link: "prod-details.html",
      company: "Artifex",
      categories: "Kids , all",
      freeShipping: true,
    },
  ];


let gridContainer = document.querySelector(".grid");
let listContainer = document.querySelector(".list-items");
let gridBtn = document.querySelector(".fa-table-cells")
let listBtn = document.querySelector(".fa-list")
let listCon = document.querySelector(".list")
let gridCon = document.querySelector(".table")

let isGrid = true;

gridBtn.addEventListener("click", () => {
  isGrid = true;
  listContainer.classList.add("hide-container");
  gridContainer.classList.remove("hide-container");
  gridCon.classList.add("active");
  gridBtn.classList.add("act");
  listCon.classList.remove("active");
  listBtn.classList.remove("act");
  listBtn.classList.remove("act-list");
  sliceProduct(cards, 0, 10); 
})

listBtn.addEventListener("click", () => {
  isGrid = false;
  gridContainer.classList.add("hide-container");
  listContainer.classList.remove("hide-container");
  gridCon.classList.remove("active");
  gridBtn.classList.remove("act")
  listCon.classList.add("active");
  listBtn.classList.add("act")
  listBtn.classList.add("act-list")
  sliceProduct(cards,0, 10);
})


  function sliceProduct(data, index, number) {
    let start = index * number;
    let end = start + number;
    let sliced = data.slice(start, end);
  
    if (isGrid) {
      gridContainer.innerHTML = sliced.map((card) => `
        <div class="loop">
          <a class="prod-link" href=./${card.link}?id=${card.id}>
            <div class="loop-img">
              <img class="img-contain" src=${card.img} alt="">
              <div class="loop-text">
                <p class="av">${card.label}</p>
                <p class="av-p">$${card.price}</p>
              </div>
            </div>
          </a>
        </div>`).join("");
    } else {
      listContainer.innerHTML = sliced.map((card) => `
        <a class="list-item" href="./${card.link}?id=${card.id}">
          <div class="image-desc">
            <div class="image-holder">
              <img src="${card.img}" height="130" width="180" alt="">
            </div>
            <div>
              <h2 class="label-text">${card.label}</h2>
              <p class="company-name">${card.company}</p>
            </div>
          </div>
          <div class="pricess">$${card.price}</div>
        </a>`).join("");
    }
  }
  
  // Pagination
  let pagination = document.querySelector(".page-wrapper");
  function paginate() {
    pagination.innerHTML = ""; // clear old buttons
    let totalPages = Math.ceil(cards.length / 10);
  
    for (let i = 0; i < totalPages; i++) {
      pagination.innerHTML += `
        <button onclick="sliceProduct(cards, ${i}, 10)" 
          style="padding:10px; background-color:#181920; border:none; color:white; 
          font-family:system-ui; font-size:16px; font-weight:600; cursor:pointer;" 
          class="page-no">${i + 1}
        </button>`;
    }
  }

paginate()


// / ====== DOM Elements ======
const searchInput = document.querySelector(".search-product");
const categorySelect = document.querySelector("#Category");
const companySelect = document.querySelector("#company");
const sortSelect = document.querySelector("#sort");
const priceRange = document.querySelector("#range-preview");
const priceLabel = document.querySelector(".one");
const shippingCheckbox = document.querySelector("#check");
const resetBtn = document.querySelector(".yel-reset button");

// ====== Display Function ======
function displayProducts(products) {
  if (!products.length) {
    gridContainer.innerHTML = `<p style="color:white;">No products found.</p>`;
    return;
  }

  gridContainer.innerHTML = products
    .map(
      (card) => `
    <div class="loop">
      <a class="prod-link" href="./${card.link}?id=${card.id}">
        <div class="loop-img">
          <img class="img-contain" src="${card.img}" alt="">
          <div class="loop-text">
            <p class="av">${card.label}</p>
            <p class="av-p">$${card.price}</p>
          </div>
        </div>
      </a>
    </div>`
    )
    .join("");
}

// ====== Filter Function ======
function filterProducts() {
  let filtered = [...cards];

  // Search filter
  const searchText = searchInput.value.toLowerCase();
  if (searchText) {
    filtered = filtered.filter((p) =>
      p.label.toLowerCase().includes(searchText)
    );
  }

  // Category filter
  const category = categorySelect.value;
  if (category !== "all") {
    filtered = filtered.filter((p) => p.categories === category);
  }

  // Company filter
  const company = companySelect.value;
  if (company !== "all") {
    filtered = filtered.filter((p) => p.company === company);
  }

  // Price filter
  const price = parseFloat(priceRange.value);
  filtered = filtered.filter((p) => p.price <= price);

  // Free shipping filter
  if (shippingCheckbox.checked) {
    filtered = filtered.filter((p) => p.freeShipping);
  }

  // Sort
  const sortValue = sortSelect.value;
  if (sortValue === "1") {
    filtered.sort((a, b) => a.label.localeCompare(b.label)); // a-z
  } else if (sortValue === "2") {
    filtered.sort((a, b) => b.label.localeCompare(a.label)); // z-a
  } else if (sortValue === "3") {
    filtered.sort((a, b) => b.price - a.price); // high-low
  } else if (sortValue === "4") {
    filtered.sort((a, b) => a.price - b.price); // low-high
  }

  // Update display
  displayProducts(filtered);
}

// ====== Event Listeners ======
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
companySelect.addEventListener("change", filterProducts);
sortSelect.addEventListener("change", filterProducts);
priceRange.addEventListener("input", () => {
  priceLabel.textContent = `$${priceRange.value}`;
  filterProducts();
});
shippingCheckbox.addEventListener("change", filterProducts);

// Reset Button
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  categorySelect.value = "all";
  companySelect.value = "all";
  sortSelect.value = "1";
  priceRange.value = 1000;
  priceLabel.textContent = "$1,000.00";
  shippingCheckbox.checked = false;
  displayProducts(cards);
});

// ====== Initial Load ======
displayProducts(cards);


// Cart number
let cartNumber = document.querySelector(".zero")
let cartMobileNumber = document.querySelector(".zero-mobile")
let toastBox = document.getElementById('toastBox');


const calculateLength = () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = cart.reduce((acc, item) => acc + item.qty, 0);
  console.log(total);
  cartNumber.innerHTML = total;
  cartMobileNumber.innerHTML = total
};
calculateLength();
document.addEventListener("DOMContentLoaded", () => {
  calculateLength();
});

// light and dark mode
const lightDark = document.querySelector(".fa-sun")
const lightDarkMobile = document.querySelector(".sunma")
const cartbtn = document.querySelector(".car")
const moon = document.querySelector(".fa-moon")
const body = document.body;
lightDark.addEventListener('click', () => {
  body.classList.toggle('light-mode')
  body.classList.toggle('dark-mode')
  lightDark.classList.toggle('fa-moon')

  // Save the user's preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check for saved user preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme + '-mode');
  } else {
    body.classList.add('light-mode'); // Default theme
  }
});

lightDarkMobile.addEventListener('click', () => {
  body.classList.toggle('light-mode')
  body.classList.toggle('dark-mode')
  // lightDark.classList.toggle('fa-moon')
  lightDarkMobile.classList.toggle('fa-moon')

  // Save the user's preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark', lightDark);
  } else {
    localStorage.setItem('theme', 'light', moon);
  }
});

// Check for saved user preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme + '-mode');
  } else {
    body.classList.add('dark-mode'); // Default theme
  }
});

