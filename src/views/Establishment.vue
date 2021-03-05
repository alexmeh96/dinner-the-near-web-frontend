<template>
  <v-app>
      <v-row class="text-center justify-center py-6">
        <h1>Заведения</h1>
      </v-row>
      <v-layout row wrap>
        <v-flex v-for="i in 10" v-bind:key="i">
          <EstablishmentCart/>
        </v-flex>
      </v-layout>
  </v-app>
</template>

<script>
import EstablishmentCart from "@/components/EstablishmentCard";
export default {
  components: {
    EstablishmentCart,
  }
}
</script>
