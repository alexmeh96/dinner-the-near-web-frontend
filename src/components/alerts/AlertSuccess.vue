<template>
  <v-alert
      dense
      text
      type="success"
  >
    {{this.message}}
  </v-alert>
</template>

<script>
export default {
  props: ['message']
}
</script>
