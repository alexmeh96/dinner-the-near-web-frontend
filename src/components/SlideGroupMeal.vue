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
          v-for="n in 15"
          :key="n">

        <MealCard />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import MealCard from "@/components/MealCard";

export default {
  data: () => ({
    model: null,
  }),
  components: {
    MealCard
  }
}
</script>
