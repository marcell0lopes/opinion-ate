import { createStore } from "vuex";
import restaurants from "@/store/restaurants";

describe("restaurants", () => {
  describe("initially", () => {
    it("does not have the loading flag", () => {
      const store = createStore({
        modules: {
          restaurants: restaurants(),
        },
      });
      expect(store.state.restaurants.loading).toEqual(false);
    });
  });

  describe("load action", () => {
    const records = [
      { id: 1, name: "Sushi Place" },
      { id: 2, name: "Pizza Place" },
    ];

    let store;

    beforeEach(() => {
      const api = {
        loadRestaurants: () => Promise.resolve(records),
      };

      store = createStore({
        modules: {
          restaurants: restaurants(api),
        },
      });

      return store.dispatch("restaurants/load");
    });

    describe("when loading succeeds", () => {
      it("stores the restaurants", () => {
        expect(store.state.restaurants.records).toEqual(records);
      });

      it("clears the loading flag", () => {
        expect(store.state.restaurants.loading).toEqual(false);
      });
    });

    describe("while loading", () => {
      it("sets a loading flag", () => {
        const api = {
          loadRestaurants: () => new Promise(() => {}),
        };

        store = createStore({
          modules: {
            restaurants: restaurants(api),
          },
        });
        store.dispatch("restaurants/load");
        expect(store.state.restaurants.loading).toEqual(true);
      });
    });
  });
});
