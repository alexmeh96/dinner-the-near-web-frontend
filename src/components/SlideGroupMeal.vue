<template>
  <v-container>
    <v-row class="text-center justify-center py-6">
      <h2>Новые блюда</h2>
    </v-row>
    <v-slide-group
        v-model="model"
        active-class="success"
        show-arrows
    >
      <v-slide-item
          v-for="meal in meals"
          :key="meal.id">

        <MealCard v-bind:meal="meal"/>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import MealCard from "@/components/MealCard";
import Meal from "@/models/meal";

export default {
  data: () => ({
    model: null,
    meals: [new Meal()]
  }),
  components: {
    MealCard
  },
  async mounted() {
    try {
      this.meals = await this.$store.dispatch('mealPopularAct')
    } catch {
      console.log('bad!')
    }
  }
}
</script>
