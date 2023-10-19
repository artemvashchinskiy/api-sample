// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the <h1> element
    const headerElement = document.querySelector('header h1');

    let isHidden = false; // Track whether the element is hidden or not

    // Function to handle scroll event
    function handleScroll() {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > 100 && !isHidden) {
            // Scrolled down by at least 100px and the element is not hidden
            headerElement.classList.add('hidden');
            isHidden = true;
        } else if (currentScrollPosition <= 100 && isHidden) {
            // Scrolled up to the top 100px and the element is hidden
            headerElement.classList.remove('hidden');
            isHidden = false;
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});


document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display product data
    function fetchProductData() {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                // Get the main element to display the product data
                const productList = document.getElementById('product-list');

                // Iterate through the product data and create product blocks
                json.forEach((product) => {
                    const productBlock = document.createElement('div');
                    productBlock.classList.add('product-block');

                    const productName = document.createElement('h3');
                    productName.textContent = product.title;

                    const productDescription = document.createElement('p');
                    productDescription.textContent = product.description;

                    const productText = document.createElement('p');
                    productText.textContent = `Price: $${product.price}`;

                    productBlock.appendChild(productName);
                    productBlock.appendChild(productDescription);
                    productBlock.appendChild(productText);

                    productList.appendChild(productBlock);
                });
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }

    // Call the fetchProductData function to load product data
    fetchProductData();
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Get current year
    const currentYear = new Date().getFullYear();
    document.getElementById('copyrightYear').textContent = currentYear;

    // Display current time with seconds
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('workingTime').textContent = timeString;
    }

    setInterval(updateTime, 1000); // Update every second
});

