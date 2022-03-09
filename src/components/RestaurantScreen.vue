<template>
  <v-card class="mt-16">
    <v-card-title>Restaurants</v-card-title>
    <v-card-text>
      <RestaurantList />
    </v-card-text>
  </v-card>
</template>

<script>
import RestaurantList from "./RestaurantList.vue";
export default {
  name: "RestaurantScreen",
  components: { RestaurantList },
};
</script>
