// Product data array
const helmets = [
    { name: "Honda Full-face", price: "$500", description: "A stylish and powerful helmet.", image: "images/helmet1.png" },
    { name: "Yamaha Full-face", price: "$500", description: "A powerful helmet.", image: "images/helmet2.png" },
    { name: "SYM Full-face", price: "$1,500", description: "A simple but elegant helmet.", image: "images/helmet3.png" }
];

// Function to display products
function displayProducts(products) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear previous products

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("category-item");
        productItem.innerHTML = `
            <a href="#" onclick="openModal('${product.name}', '${product.price}', '${product.description}', '${product.image}')">
                <img src="${product.image}" alt="${product.name}">
            </a>
            <p>${product.name}</p>
        `;
        productGrid.appendChild(productItem);
    });
}

// Display all products by default
displayProducts(helmets);

// Search function
function searchProducts() {
    const input = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = helmets.filter(product =>
        product.name.toLowerCase().includes(input)
    );

    // Display filtered products or all if input is empty
    displayProducts(filteredProducts);
}

// Modal functionality for product details
function openModal(title, price, description, imageSrc) {
    document.getElementById('productTitle').textContent = title;
    document.getElementById('productPrice').textContent = price;
    document.getElementById('productDescription').textContent = description;
    document.getElementById('productImage').src = imageSrc;

    // Show the modal
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    // Hide the modal
    document.getElementById('productModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
};
