<template>
  <v-expansion-panels accordion>
    <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
    >
      <v-expansion-panel-header class="text-center">Добавить изображения</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container>

          <v-form @submit.prevent="addRestaurant"
                  ref="form"
                  lazy-validation
          >

            <v-select
                v-model="selected"
                :items="restaurants"
                label="Ресторан"
                outlined
                item-text="name"
                item-value="id"

            >
            </v-select>

            <v-file-input
                multiple
                label="Изображения"
                v-model="files"
            ></v-file-input>

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
    files: null,
    restaurants: [new Restaurant()],
    selected: null,
  }),
  async mounted() {
    try {
      this.restaurants = await this.$store.dispatch('restaurantAct')
    } catch {
      console.log('bad!')
    }
  },
  methods: {
    // handleFileUpload(file) {
    //   console.log(file)
    //   // this.file = this.$refs.file.files.item(0);
    //   // console.log(this.file)
    // },
    async addRestaurant() {
      console.log(this.files)
      try {
        await this.$store.dispatch('addRestaurantImg', {
          files: this.files,
          restaurantId: this.selected
        })
      } catch {
        console.log('bad!')
      }
    }
  }
}
</script>
