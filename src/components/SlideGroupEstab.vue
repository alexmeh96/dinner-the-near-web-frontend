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
          v-for="n in 15"
          :key="n">

        <EstablishmentCard/>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import EstablishmentCard from "@/components/EstablishmentCard";

export default {
  data: () => ({
    model: null,
  }),
  components: {
    EstablishmentCard
  }
}
</script>
