<template>
  <v-app>
    <v-row class="text-center justify-center py-6">
      <h1>Блюда</h1>
    </v-row>
    <v-layout row wrap>
      <v-flex v-for="i in 10" v-bind:key="i">
        <MealCard/>
      </v-flex>
    </v-layout>

  </v-app>
</template>

<script>
import MealCard from "@/components/MealCard";

export default {
  components: {
    MealCard
  }
}
</script>
