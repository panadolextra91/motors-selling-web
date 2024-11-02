// Product data array for accessories
const accessories = [
    { name: "Side Bags", price: "$50", description: "A stylish side bag.", image: "images/bag.png" },
    { name: "Key Chain", price: "$5", description: "A stylish key chain.", image: "images/keychain.png" },
    { name: "Sticker", price: "$15", description: "A cool sticker for your vehicle.", image: "images/sticker.png" }
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
displayProducts(accessories);

// Search function
function searchProducts() {
    const input = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = accessories.filter(product =>
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
