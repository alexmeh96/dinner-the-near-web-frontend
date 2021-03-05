<template>
  <v-app>
    <v-main>
      <MainLayout />
    </v-main>
  </v-app>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  name: 'App',

  components: {
    MainLayout
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-color: var(--v-background-base);
}
</style>
