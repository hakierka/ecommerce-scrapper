# E-Commerce Product Scraper


## Introduction

This script addresses the challenge of extracting products from an imaginary e-commerce API that imposes a limitation of 1000 products per request. The API, although fictional, mimics real-world scenarios where large datasets need to be fetched in chunks. The script overcomes this limitation by intelligently creating requests for specific price ranges, ensuring that all products are scraped and consolidated into a single array.

## Problem Statement

The challenge is to extract all products from an imaginary e-commerce JSON API with a limitation of 1000 products per request. Each product costs between $0 and $100,000, and the API accepts `minPrice` and `maxPrice` parameters for filtering.

## Solution

### Initial Request
The script initiates the process by making an initial request to the API without any query parameters. This fetches the first 1000 products and provides the total number of available products.

### Subsequent Requests
To overcome the API limitation, the script calculates price ranges based on the total number of products and a maximum price of $100,000. It then makes subsequent requests to the API with calculated `minPrice` and `maxPrice` parameters, ensuring all products are fetched.

### Testing
The script's functionality is tested using the Jest framework. The tests mock the API response and verify if the `scrapeProducts` function correctly retrieves all products and returns them in an array.

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

