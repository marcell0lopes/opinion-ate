describe("Listing Restaurants", () => {
  it("shows restaurants from the server", () => {
    const sushiPlace = "Sushi Place";
    const pizzaPlace = "Pizza Place";

    cy.server({ force404: true });

    cy.route({
      method: "GET",
      url: "https://outside-in-dev-api.herokuapp.com/Yy5nB8KLp7vUutv0djX1Nyh8IcWvdUwo/restaurants",
      response: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    });

    cy.visit("/");
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
