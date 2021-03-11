<template>
  <v-container>
    <v-row class="text-center justify-center py-6">
      <h2>Популярные заведения</h2>
    </v-row>
    <v-slide-group
        v-model="model"
        active-class="success"
        show-arrows
    >
      <v-slide-item
          v-for="restaurant in restaurants"
          :key="restaurant.id">

        <RestaurantCard v-bind:restaurant="restaurant"/>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard";
import Restaurant from "@/models/restaurant";

export default {
  data: () => ({
    model: null,
    restaurants: [new Restaurant()]
  }),
  components: {
    RestaurantCard
  },
  async mounted() {
    try {
      this.restaurants = await this.$store.dispatch('restaurantPopularAct')
    } catch {
      console.log('bad!')
    }
  }
}
</script>
