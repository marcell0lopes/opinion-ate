import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import RestaurantList from "@/components/RestaurantList";

const findByTestId = (wrapper, testId, index) => {
  return wrapper.findAll(`[data-testid="${testId}"]`).at(index);
};

describe("RestaurantList", () => {
  const records = [
    { id: 1, name: "Sushi Place" },
    { id: 2, name: "Pizza Place" },
  ];

  let restaurantsModule;
  let wrapper;

  beforeEach(() => {
    restaurantsModule = {
      namespaced: true,
      state: { records },
      actions: {
        load: jest.fn().mockName("load"),
      },
    };

    const store = createStore({
      modules: {
        restaurants: restaurantsModule,
      },
    });

    wrapper = mount(RestaurantList, { global: { plugins: [store] } });
  });

  it("loads restaurants on mount", () => {
    expect(restaurantsModule.actions.load).toHaveBeenCalled();
  });

  it("displays the restaurants", () => {
    expect(findByTestId(wrapper, "restaurant", 0).text()).toBe("Sushi Place");

    expect(findByTestId(wrapper, "restaurant", 1).text()).toBe("Pizza Place");
  });
});
