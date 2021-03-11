<template>
  <v-app>
<!--      <AlertSuccess  v-bind:message="message"/>-->
<!--      <AlertError />-->
      <Auth/>
  </v-app>
</template>

<script>
import Auth from "@/components/Auth";

export default {
  components: {
    Auth,
  },
  data: () => ({
    message: 'Регистрация прошла успешно!',
    alert: ''
  }),
  methods: {
    loginError() {
      console.log('!!!!!!!!!!!!!!!!')
      this.alert = 'loginError'
    }
  }
}
</script>
