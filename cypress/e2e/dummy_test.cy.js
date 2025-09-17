describe("ForeverBuy Add-to-Cart Tests", () => {
  beforeEach(() => {
    cy.visit("https://foreverbuy.in/");
  });

  it("TC-001: Add first item to cart", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Kid Tapered Slim Fit Trouser").should("be.visible");
    cy.contains("$38").should("be.visible");
  });

  it("TC-002: Add second item to cart", () => {
    cy.get(".pt-3.pb-1.text-sm").eq(1).click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Men Round Neck Pure Cotton T-shirt").should("be.visible");
    cy.contains("$64").should("be.visible");
  });

  it("TC-003: Verify cart item count increases", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();

    cy.go("back");
    cy.get(".pt-3.pb-1.text-sm").eq(1).click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();

    cy.get("p").contains("2").should("be.visible");
  });

  it("TC-004: Verify multiple products appear in cart", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();

    cy.go("back");
    cy.get(".pt-3.pb-1.text-sm").eq(1).click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();

    cy.get("img.w-5.min-w-5").click();
    cy.contains("Kid Tapered Slim Fit Trouser").should("be.visible");
    cy.contains("Men Round Neck Pure Cotton T-shirt").should("be.visible");
  });

  it("TC-005: Verify special characters display correctly", () => {
    cy.get(".pt-3.pb-1.text-sm").contains("Cotton T-shirt").click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Cotton T-shirt").should("be.visible");
  });

  it("TC-006: Add product with special characters", () => {
    cy.get(".pt-3.pb-1.text-sm").contains("Cotton T-shirt").click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Cotton T-shirt").should("be.visible");
  });

  it("TC-007: Verify navigation back after adding product", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.go("back");
    cy.get(".pt-3.pb-1.text-sm").first().should("be.visible");
  });

  it("TC-009: Verify ADD TO CART button works", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.contains("Kid Tapered Slim Fit Trouser").should("be.visible");
  });

  it("TC-010: Cart icon navigation", () => {
    cy.get(".pt-3.pb-1.text-sm").first().click();
    cy.get(".border.py-2.px-4.bg-gray-100").first().click();
    cy.contains("button", "ADD TO CART").click();
    cy.get("img.w-5.min-w-5").click();
    cy.url().should("include", "/cart");
  });
});
