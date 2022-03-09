import { createStore } from "vuex";
import restaurants from "./restaurants";
import api from "@/api";

export default createStore({
  modules: { restaurants: restaurants(api) },
});
