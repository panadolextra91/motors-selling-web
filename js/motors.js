// Product data array for motorcycles
const motorcycles = [
    { name: "Air Blade", price: "$3,500", description: "A stylish and powerful scooter with great performance for city commuting.", image: "images/airblade.png" },
    { name: "CB 350", price: "$5,500", description: "A powerful motorcycle for long rides.", image: "images/cb350.png" },
    { name: "Dream", price: "$1,500", description: "A simple but elegant motorcycle.", image: "images/dream.png" },
    { name: "Exciter", price: "$2,200", description: "A powerful motorcycle for long rides.", image: "images/ex.png" },
    { name: "Janus", price: "$1,500", description: "A powerful motorcycle for long rides.", image: "images/janus.png" },
    { name: "Lead", price: "$1,250", description: "A powerful motorcycle for long rides.", image: "images/lead.png" },
    { name: "SH i250", price: "$5,500", description: "A powerful motorcycle for long rides.", image: "images/sh.png" },
    { name: "Vario", price: "$5,500", description: "A powerful motorcycle for long rides.", image: "images/vario.png" },
    { name: "Vision Sport Edition", price: "$2,500", description: "A powerful motorcycle for long rides.", image: "images/vision.png" },
    { name: "Wave Alpha", price: "$5,500", description: "A powerful motorcycle for long rides.", image: "images/wave.png" },
    { name: "Winner", price: "$500", description: "A powerful motorcycle for long rides.", image: "images/winner.png" }
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
displayProducts(motorcycles);

// Search function
function searchProducts() {
    const input = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = motorcycles.filter(product =>
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
