<template>
  <v-app>
    <v-app-bar color="green" dense shaped>
      <v-toolbar-title>Opinion Ate</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <RestaurantScreen />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import RestaurantScreen from "@/components/RestaurantScreen";

export default {
  name: "App",
  components: {
    RestaurantScreen,
  },
};
</script>
