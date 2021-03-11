<template>
  <v-alert
      class="text-center"
      :value="message"
      type="error"
      dismissible
      outlined
      border="left"

  >
    {{message}}
  </v-alert>
</template>

<script>
import {  mapMutations } from "vuex";

export default {

  computed: {
    message() {
      return this.$store.state.message
    }

  },
  methods: {
    ...mapMutations(["setAlert"]),
    closeAlert() {
      this.setAlert({text: ''});
    }
  }
}
</script>
