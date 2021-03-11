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
                :items="meals"
                label="Блюдо"
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

import Meal from "@/models/meal";

export default {
  data: () => ({
    files: null,
    meals: [new Meal()],
    selected: null,
  }),
  async mounted() {
    try {
      this.meals = await this.$store.dispatch('mealAct')
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
        await this.$store.dispatch('addMealImg', {
          files: this.files,
          mealId: this.selected
        })
      } catch {
        console.log('bad!')
      }
    }
  }
}
</script>
