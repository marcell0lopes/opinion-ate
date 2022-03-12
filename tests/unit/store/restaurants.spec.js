import { createStore } from "vuex";
import restaurants from "@/store/restaurants";

describe("restaurants", () => {
  describe("initially", () => {
    const store = createStore({
      modules: {
        restaurants: restaurants(),
      },
    });

    it("does not have the loading flag", () => {
      expect(store.state.restaurants.loading).toEqual(false);
    });

    it("does not have the loadError flag", () => {
      expect(store.state.restaurants.loadError).toEqual(false);
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

    describe("when loading fails", () => {
      let store;

      beforeEach(() => {
        const api = {
          loadRestaurants: () => Promise.reject(),
        };

        store = createStore({
          modules: {
            restaurants: restaurants(api),
          },
        });
        return store.dispatch("restaurants/load");
      });
      it("sets an error flag", () => {
        expect(store.state.restaurants.loadError).toEqual(true);
      });
    });

    describe("while loading", () => {
      let store;

      beforeEach(() => {
        const api = {
          loadRestaurants: () => new Promise(() => {}),
        };

        store = createStore({
          modules: {
            restaurants: restaurants(api, { loadError: true }),
          },
        });
        store.dispatch("restaurants/load");
      });

      it("sets a loading flag", () => {
        expect(store.state.restaurants.loading).toEqual(true);
      });

      it("clears the error flag", () => {
        expect(store.state.restaurants.loadError).toEqual(false);
      });
    });
  });
});
