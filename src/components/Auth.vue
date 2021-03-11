<template>
  <v-app>
    <v-main>
      <v-card
          class="mx-auto my-16"
          max-width="500"
      >
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <h1

                  class="text-center display-2  text--accent-3 light-blue--text"
              >Войти в свой профиль</h1>
              <v-row align="center" justify="space-around">
                <v-btn text class="mt-5" @click="step++">
                  У меня нет профиля
                </v-btn>
              </v-row>

              <v-form @submit.prevent="login">
                <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="email"
                    type="text"
                    color="teal accent-3"
                    v-model.trim="user.email"
                />

                <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    color="teal accent-3"
                    v-model.trim="user.password"
                />

                <h3 class="text-center mt-4">Забыли пароль ?</h3>

                <div class="text-center mt-3 mb-3">
                  <v-btn rounded color="light-blue" dark type="submit">Войти</v-btn>
                </div>
              </v-form>

            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <h1 class="text-center display-2 text--accent-3 light-blue--text">Создать профиль</h1>
              <v-row align="center" justify="space-around">
                <v-btn text class="mt-5" @click="step--">
                  У меня есть профиль
                </v-btn>
              </v-row>

              <!--                      <h4 class="text-center mt-4">Ensure your email for registration</h4>-->
              <v-form @submit.prevent="register">
                <v-text-field
                    label="Name"
                    name="username"
                    prepend-icon="person"
                    type="text"
                    color="teal accent-3"
                    v-model.trim="user.username"
                />
                <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="email"
                    type="text"
                    color="teal accent-3"
                    v-model.trim="user.email"
                />

                <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    color="teal accent-3"
                    v-model.trim="user.password"
                />

                <div class="text-center mt-3 mb-3">
                  <v-btn rounded color="light-blue" dark type="submit">Создать</v-btn>
                </div>
              </v-form>


            </v-card-text>
          </v-window-item>

        </v-window>

        <v-divider></v-divider>

      </v-card>
    </v-main>
  </v-app>

</template>

<script>
import User from "@/models/user";

export default {
  data: () => ({
    step: 1,
    user: new User()
  }),

  created() {
    if (this.$store.getters.getLoggedIn) {
      this.$router.push('/profile');
    }
  },

  methods: {
    async login() {
      try {
        await this.$store.dispatch('loginAct', this.user)
        // console.log(this.$store.getters.getLoggedIn)
        await this.$router.push('/profile')
      } catch (e) {
        // this.$emit('loginError')
        console.log("bad!")

        this.$store.commit( "setAlert", { text: "Error." }, { root: true });

      }
    },

    async register() {
      try {
        await this.$store.dispatch('registerAct', this.user)
        console.log("cool!")
      } catch {
        console.log("bad!")

      }
    }
  }

}
</script>
