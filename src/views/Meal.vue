<template>
  <v-app>
    <v-row class="text-center justify-center py-6">
      <h1>Блюда</h1>
    </v-row>

    <SettingMeal/>

    <v-container>
      <v-layout row wrap>
        <v-flex v-for="meal in meals" v-bind:key="meal.id">
          <MealCard v-bind:meal="meal"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import MealCard from "@/components/MealCard";
import SettingMeal from '@/components/SettingMeal'
import Meal from "@/models/meal";

export default {
  data: () => ({
    meals: [new Meal]
  }),
  components: {
    MealCard, SettingMeal
  },
  async mounted() {
    try {
      this.meals = await this.$store.dispatch('mealAct')
    } catch {
      console.log('bad!')
    }
  }
}
</script>
