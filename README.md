# E-Commerce Product Scraper


## Introduction

This script addresses the challenge of extracting products from an imaginary e-commerce API that imposes a limitation of 1000 products per request. The API, although fictional, mimics real-world scenarios where large datasets need to be fetched in chunks. The script overcomes this limitation by intelligently creating requests for specific price ranges, ensuring that all products are scraped and consolidated into a single array.

## Problem Statement

The challenge is to extract all products from an imaginary e-commerce JSON API with a limitation of 1000 products per request. Each product costs between $0 and $100,000, and the API accepts `minPrice` and `maxPrice` parameters for filtering.

## Solution

The solution to this problem was to create an algorithm that overcomes the limitation of the API by creating requests for specific price ranges of products. This ensures that all products are scraped and accumulated into a single array called `products`.

Here's how the requests work:

1. **Initial Request:** The script first makes an initial request to the API without any query parameters. This returns the first 1000 products and the total number of products available. The total number of products is important because it helps us determine how many subsequent requests we need to make.

2. **Calculating Price Ranges:** The script then calculates the price range for subsequent requests based on the total number of products and the maximum price of $100,000. The idea is to divide the entire price range ($0 to $100,000) into smaller ranges such that each range contains approximately 1000 products. This is done by dividing the maximum price by the ceiling of the total number of products divided by 1000.

3. **Subsequent Requests:** The script then makes subsequent requests to the API with the `minPrice` and `maxPrice` query parameters set to these calculated price ranges. Each request will return products within a specific price range, and since each price range contains approximately 1000 products, we can retrieve all products with multiple requests.

This approach effectively overcomes the limitation of the API by making multiple requests for specific price ranges. It ensures that all products are scraped and accumulated into a single array, regardless of the total number of products available on the API.

## Testing

The script is tested using the `jest` testing framework. The tests mock the API response and check if the `scrapeProducts` function correctly scrapes all products from the API and returns them in an array.

## Adapting the Solution to a Real API

While designed for an imaginary API, this script can be easily adapted for a real API with a similar structure. Simply replace the imaginary API URL with the real one and update the `axios.get` calls as needed, including any required headers or authentication.

## Installation

1. Clone this repository: `git clone https://github.com/hakierka/ecommerce-scrapper.git`
2. Navigate to the project directory: `cd ecommerce-scrapper`
3. Install the dependencies: `npm install`

## Usage

Run the script with the command: `node src/index.js`

Note: This command will result in an ERROR because the script attempts to make a request to an imaginary API at https://api.ecommerce.com/products, which doesn’t exist. The ETIMEDOUT error indicates that the request to the server timed out without a response.

Check the [Adapting the Solution to a Real API](##adapting-the-solution-to-a-Real-API) section for guidance on adapting the script to a real API.

## Testing

Run the tests with the command: `npm test`

