<template>
  <v-app>
    <v-row class="text-center justify-center py-6">
      <h1>Заведения</h1>
    </v-row>
    <v-layout row wrap>
      <v-flex v-for="restaurant in restaurants" v-bind:key="restaurant.id">
        <RestaurantCard v-bind:restaurant="restaurant"/>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard";
import Restaurant from "@/models/restaurant";

export default {
  data: () => ({
    restaurants: [new Restaurant()]
  }),
  components: {
    RestaurantCard,
  },
  async mounted() {
    try {
      this.restaurants = await this.$store.dispatch('restaurantAct')
    } catch {
      console.log('bad!')
    }
  }
}
</script>
