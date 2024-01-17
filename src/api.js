const axios = require('axios');
/**
 * Function to scrape products from an imaginary e-commerce API with a 1000 products per request limitation.
 * returns an array containing all scraped products.
 */
async function scrapeProducts() {
  // Initialize an array to store scraped products

  let products = [];

  // Initial request to get the total number of products
  let response = await axios.get('https://api.ecommerce.com/products');
  let { total } = response.data;
  
  // Add products from the initial request to the array
  products.push(...response.data.products);

  // Calculate the price range for subsequent requests
  const priceRange = 100000 / Math.ceil(total / 1000);

  // Subsequent requests to fetch all products based on price ranges
  for (let i = 1; i < Math.ceil(total / 1000); i++) {
    const minPrice = i * priceRange;
    const maxPrice = minPrice + priceRange;
    // Make subsequent requests with minPrice and maxPrice parameters
    response = await axios.get(`https://api.ecommerce.com/products?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    // Add products from subsequent requests to the array
    products.push(...response.data.products);
  }

  // Return the accumulated array of products
  return products;
}

// Export the scrapeProducts function to make it accessible to other modules
module.exports = { scrapeProducts };
