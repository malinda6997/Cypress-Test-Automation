# Cypress Test Automation

This repository contains automated tests for the Forever Buy e-commerce website using Cypress.

## Tests

The test suite includes shopping cart functionality tests:

- Adding single and multiple items to cart
- Adding the same item multiple times
- Removing items from cart
- Cart total calculation
- Cart persistence
- Page refresh behavior
- Special character product handling
- Checkout functionality

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npx cypress run` or `npx cypress open`

## Project Structure

- `cypress/e2e/` - Test files
- `cypress/fixtures/` - Test data
- `cypress/support/` - Custom commands and configuration
