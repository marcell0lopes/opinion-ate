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
});
