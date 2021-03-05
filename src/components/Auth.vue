<template>
  <v-app>
    <v-main>
      <v-card
          color="#4FC3F7"
          class="mx-auto my-16"
          max-width="500"
      >
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <h1
                  class="text-center display-2  text--accent-3"
              >Войти в свой профиль</h1>
              <v-row align="center" justify="space-around">
                <v-btn text class="mt-5" @click="step++">
                  У меня нет профиля
                </v-btn>
              </v-row>

              <v-form>
                <v-text-field
                    label="Email"
                    name="Email"
                    prepend-icon="email"
                    type="text"
                    color="teal accent-3"
                />

                <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    color="teal accent-3"
                />
              </v-form>
              <h3 class="text-center mt-4">Забыли пароль ?</h3>

              <div class="text-center mt-3 mb-3">
                <v-btn rounded color="teal accent-3" dark>Войти</v-btn>
              </div>


            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <h1 class="text-center display-2 text--accent-3">Создать профиль</h1>
              <v-row align="center" justify="space-around">
                <v-btn text class="mt-5" @click="step--">
                  У меня есть профиль
                </v-btn>
              </v-row>

              <!--                      <h4 class="text-center mt-4">Ensure your email for registration</h4>-->
              <v-form>
                <v-text-field
                    label="Name"
                    name="Name"
                    prepend-icon="person"
                    type="text"
                    color="teal accent-3"
                />
                <v-text-field
                    label="Email"
                    name="Email"
                    prepend-icon="email"
                    type="text"
                    color="teal accent-3"
                />

                <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    color="teal accent-3"
                />
              </v-form>

              <div class="text-center mt-3 mb-3">
                <v-btn rounded color="teal accent-3" dark>Создать</v-btn>
              </div>

            </v-card-text>
          </v-window-item>

        </v-window>

        <v-divider></v-divider>

      </v-card>
    </v-main>
  </v-app>

</template>

<script>
export default {
  data: () => ({
    step: 1
  }),


}
</script>
