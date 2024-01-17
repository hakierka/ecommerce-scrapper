const axios = require('axios');

async function scrapeProducts() {
  let products = [];

  // Initial request
  let response = await axios.get('https://api.ecommerce.com/products');
  let { total } = response.data;
  products.push(...response.data.products);

  // Calculate price ranges
  const priceRange = 100000 / Math.ceil(total / 1000);

  // Subsequent requests
  for (let i = 1; i < Math.ceil(total / 1000); i++) {
    const minPrice = i * priceRange;
    const maxPrice = minPrice + priceRange;
    response = await axios.get(`https://api.ecommerce.com/products?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    products.push(...response.data.products);
  }

  // Handle edge cases...

  return products;
}

module.exports = { scrapeProducts };
