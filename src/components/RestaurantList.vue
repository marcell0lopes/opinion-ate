<template>
  <div>
    <v-progress-circular
      indeterminate
      v-if="loading"
      color="green"
      data-testid="loading-indicator"
    />
    <v-list-item
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      data-testid="restaurant"
    >
      <v-list-content>
        <v-list-title>
          {{ restaurant.name }}
        </v-list-title>
      </v-list-content>
    </v-list-item>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "RestaurantList",
  mounted() {
    this.loadRestaurants();
  },
  methods: mapActions({
    loadRestaurants: "restaurants/load",
  }),
  computed: mapState({
    loading: state => state.restaurants.loading,
    restaurants: state => state.restaurants.records,
  }),
};
</script>
