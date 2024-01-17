// Import necessary modules and functions
const { scrapeProducts } = require('../src/api');
const axios = require('axios');

// Mock the axios module to simulate API responses during testing
jest.mock('axios'); 

// Describe block to group related tests for the scrapeProducts function
describe('scrapeProducts', () => {
  // Test case: should scrape all products
  it('should scrape all products', async () => {
    // Mock the API response for the initial request
    axios.get.mockResolvedValue({
      data: {
        total: 99999,
        count: 1000,
        products: new Array(1000).fill({}) // Mock 1000 products
      }
    });
    // Call the scrapeProducts function to simulate scraping
    const products = await scrapeProducts();

    // Check that the function returns the correct number of products
    expect(products.length).toBe(100000); // Update this line based on the mock data

    // Check that all returned items are products
    expect(products.every(item => typeof item === 'object')).toBe(true);
  });
});
