describe("ForeverBuy Add-to-Cart Tests", () => {
  beforeEach(() => {
    cy.visit("https://foreverbuy.in/");
  });

  it("CART-001: Add first item to cart", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Kid Tapered Slim Fit Trouser").should("be.visible");
    cy.contains("$38").should("be.visible");
  });

  it("CART-002: Add second item to cart", () => {
    cy.get(".pt-3.pb-1.text-sm").eq(1).click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Men Round Neck Pure Cotton T-shirt").should("be.visible");
    cy.contains("$64").should("be.visible");
  });

  it("CART-003: Remove item from cart using XPath", () => {
    // Go to cart page
    cy.get("img.w-5.min-w-5").click();

    // Remove first item using XPath
    cy.xpath("(//img[@class='w-4 mr-4 sm:w-5 cursor-pointer'])[1]").click();

    // Verify cart is empty (if only one item was there)
    cy.contains("Cart is empty").should("be.visible");
  });

  it("CART-004: Cart total calculation", () => {
    // Add first item
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.go("back");

    // Add second item
    cy.get(".pt-3.pb-1.text-sm").eq(1).click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();

    // Go to cart
    cy.get("img.w-5.min-w-5").click();
    cy.contains("$38").should("be.visible");
    cy.contains("$64").should("be.visible");
    // Optionally check sum of prices if there's a total element
    cy.get(".cart-total").should("contain", "$102");
  });

  it("CART-005: Add item then refresh page", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.reload();
    cy.contains("Cart is empty").should("be.visible");
  });

  it("CART-006: Add product with special characters", () => {
    cy.get(".pt-3.pb-1.text-sm").contains("Cotton T-shirt").click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Cotton T-shirt").should("be.visible");
  });

  it("CART-007: Verify empty cart initially", () => {
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Cart is empty").should("be.visible");
  });

  it("CART-008: Add product and navigate back", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.go("back");
    // Product won’t persist because session is cleared, just verify page loaded
    cy.get(".pt-3.pb-1.text-sm").first().should("be.visible");
  });

  it("CART-009: Verify ADD TO CART button works", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Kid Tapered Slim Fit Trouser").should("be.visible");
  });

  it("CART-010: Cart icon navigation", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.url().should("include", "/cart"); // check navigation to cart page
  });
});
