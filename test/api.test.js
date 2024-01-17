const { scrapeProducts } = require('../src/api');
const axios = require('axios');

jest.mock('axios'); // This line mocks the axios module

describe('scrapeProducts', () => {
  it('should scrape all products', async () => {
    // Mock the API response
    axios.get.mockResolvedValue({
      data: {
        total: 99999,
        count: 1000,
        products: new Array(1000).fill({}) // Mock 1000 products
      }
    });

    const products = await scrapeProducts();

    // Check that the function returns the correct number of products
    expect(products.length).toBe(100000); // Update this line

    // Check that all returned items are products
    expect(products.every(item => typeof item === 'object')).toBe(true);
  });
});
