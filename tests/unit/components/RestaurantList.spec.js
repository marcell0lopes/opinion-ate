import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import RestaurantList from "@/components/RestaurantList";

describe("RestaurantList", () => {
  it("loads restaurants on mount", () => {
    const restaurantsModule = {
      namespaced: true,
      actions: {
        load: jest.fn().mockName("load"),
      },
    };

    const store = createStore({
      modules: { restaurants: restaurantsModule },
    });

    mount(RestaurantList, { global: { plugins: [store] } });

    expect(restaurantsModule.actions.load).toHaveBeenCalled();
  });

  it("displays the restaurants", () => {
    const records = [
      { id: 1, name: "Sushi Place" },
      { id: 2, name: "Pizza Place" },
    ];

    const restaurantsModule = {
      namespaced: true,
      state: { records },
      actions: {
        load: jest.fn().mockName("load"),
      },
    };

    const store = new createStore({
      modules: {
        restaurants: restaurantsModule,
      },
    });

    const wrapper = mount(RestaurantList, { global: { plugins: [store] } });

    const firstRestaurantName = wrapper
      .findAll('[data-testid="restaurant"]')
      .at(0)
      .text();

    expect(firstRestaurantName).toBe("Sushi Place");

    const secondRestaurantName = wrapper
      .findAll('[data-testid="restaurant"]')
      .at(1)
      .text();

    expect(secondRestaurantName).toBe("Pizza Place");
  });
});
