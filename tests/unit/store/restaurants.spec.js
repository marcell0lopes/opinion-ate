import { createStore } from "vuex";
import restaurants from "@/store/restaurants";

describe("restaurants", () => {
  describe("load action", () => {
    it("stores the restaurants", async () => {
      const records = [
        { id: 1, name: "Sushi Place" },
        { id: 2, name: "Pizza Place" },
      ];

      const api = {
        loadRestaurants: () => Promise.resolve(records),
      };

      const store = createStore({
        modules: {
          restaurants: restaurants(api),
        },
      });

      await store.dispatch("restaurants/load");

      expect(store.state.restaurants.records).toEqual(records);
    });
  });
});
