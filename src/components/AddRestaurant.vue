<template>
    <v-expansion-panels accordion>
      <v-expansion-panel
          v-for="(item,i) in 1"
          :key="i"
      >
        <v-expansion-panel-header class="text-center">Добавить ресторан</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>

            <v-form @submit.prevent="addRestaurant"
                ref="form"
                lazy-validation
            >
              <v-text-field
                  :counter="10"
                  label="Название"
                  required
                  v-model="restaurant.name"
                  name="name"
              ></v-text-field>

              <v-textarea
                  outlined
                  name="describe"
                  label="Описание"
                  value=""
                  v-model="restaurant.describe"
              ></v-textarea>

              <v-file-input
                  name="file"
                  label="Превью ресторана"
                  filled
                  prepend-icon="mdi-camera"
                  nonce=""
                  v-model="file"
              ></v-file-input>

<!--              <v-file-input-->
<!--                  multiple-->
<!--                  label="File input"-->
<!--              ></v-file-input>-->

              <v-btn
                  color="success"
                  class="mr-4"
                  type="submit"
              >
                Добавить
              </v-btn>
            </v-form>

          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

</template>

<script>

import Restaurant from "@/models/restaurant";

export default {
  data: () => ({
    file: null,
    restaurant: new Restaurant()
  }),
  methods: {
    // handleFileUpload(file) {
    //   console.log(file)
    //   // this.file = this.$refs.file.files.item(0);
    //   // console.log(this.file)
    // },
    async addRestaurant() {
      try {
        await this.$store.dispatch('addRestaurantAct', {file: this.file, name: this.restaurant.name, description: this.restaurant.description})
      } catch {
        console.log('bad!')
      }
    }
  }
}
</script>
