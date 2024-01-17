# E-Commerce Product Scraper

## Introduction

This project is a script to scrape all products from an imaginary e-commerce API. The API has a limitation where it only returns a maximum of 1000 products per request. This script overcomes this limitation by creating requests for specific price ranges of products, ensuring all products are scraped and accumulated into a single array.

## Problem Statement

The challenge posed by the assignment was to extract all products from an imaginary e-commerce JSON API with limited results per search. The API only returns a maximum of 1000 products per request, and each product on the API costs somewhere between $0 and $100,000. The API accepts `minPrice` and `maxPrice` query parameters to filter the products by price.

## Solution

The solution to this problem was to create an algorithm that overcomes the limitation of the API by creating requests for specific price ranges of products. This ensures that all products are scraped and accumulated into a single array called `products`.

The script uses the `axios` library to make HTTP requests to the API. The `axios` library was chosen for its simplicity and ease of use. It supports promises by default, which makes it easy to handle asynchronous HTTP requests.

The script first makes an initial request to the API without any query parameters. This returns the first 1000 products and the total number of products available. The script then calculates the price range for subsequent requests based on the total number of products and the maximum price of $100,000. It then makes subsequent requests to the API with the `minPrice` and `maxPrice` query parameters set to these calculated price ranges.

## Testing

The script is tested using the `jest` testing framework. The tests mock the API response and check if the `scrapeProducts` function correctly scrapes all products from the API and returns them in an array.

## Adapting the Solution to a Real API

While this script was designed for an imaginary API, it can be easily adapted to a real API with a similar structure. The main change would be to replace the URL of the imaginary API with the URL of the real API. You would also need to update the `axios.get` calls with any necessary headers or authentication required by the real API.

## Installation

1. Clone this repository: `git clone https://github.com/hakierka/ecommerce-scrapper.git`
2. Navigate to the project directory: `cd ecommerce-scrapper`
3. Install the dependencies: `npm install`

## Usage

Run the script with the command: `node src/index.js`

## Testing

Run the tests with the command: `npm test`

