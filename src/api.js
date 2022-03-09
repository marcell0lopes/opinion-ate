import axios from "axios";

const client = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/Yy5nB8KLp7vUutv0djX1Nyh8IcWvdUwo`,
});

const api = {
  loadRestaurants() {
    return client.get("/restaurants").then(response => response.data);
  },
};

export default api;
