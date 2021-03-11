<template>
    <v-expansion-panels accordion>
      <v-expansion-panel
          v-for="(item,i) in 1"
          :key="i"
      >
        <v-expansion-panel-header class="text-center">Добавить блюдо</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>

            <v-form
                ref="form"
                lazy-validation
                @submit.prevent="addMeal"
            >

              <v-text-field
                  v-model="meal.name"
                  :counter="10"
                  label="Name"
                  required
              ></v-text-field>

              <v-textarea
                  v-model="meal.description"
                  outlined
                  name="input-7-4"
                  label="Описание"
                  value=""
              ></v-textarea>

              <v-file-input
                  label="Превью блюда"
                  filled
                  prepend-icon="mdi-camera"
                  v-model="file"

              ></v-file-input>

              <v-select
                  v-model="selected"
                  :items="restaurants"
                  label="Ресторан"
                  outlined
                  item-text="name"
                  item-value="id"

              >
              </v-select>

              <v-btn
                  color="success"
                  class="mr-4"
                  type="submit"
              >
                Добавить
              </v-btn>
            </v-form>

<!--            <v-form>-->
<!--              <v-file-input-->
<!--                  multiple-->
<!--                  label="File input"-->
<!--              ></v-file-input>-->

<!--              <v-btn-->
<!--                  color="success"-->
<!--                  class="mr-4"-->
<!--              >-->
<!--                Добавить-->
<!--              </v-btn>-->
<!--            </v-form>-->

          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

</template>

<script>
import Restaurant from "@/models/restaurant";
import Meal from "@/models/meal";

export default {
  data: () => ({
    restaurants: [new Restaurant()],
    meal: new Meal(),
    selected: null,
    file: null,
  }),

  async mounted() {
    try {
      this.restaurants = await this.$store.dispatch('restaurantAct')
    } catch {
      console.log('bad!')
    }
  },

  methods: {
    async addMeal() {
      try {
        await this.$store.dispatch('addMealAct', {file: this.file, name: this.meal.name, description: this.meal.description, restaurantId: this.selected})
      } catch {
        console.log('bad!')
      }
    }
  }
}
</script>
