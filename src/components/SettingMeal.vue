<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
        >
          <v-expansion-panel-header class="text-center">Параметры поиска</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <v-row>
                <v-col cols="12"
                       md="4">
                  <v-container>
                    <v-row>
                      <v-slider
                          v-model="ex2.val"
                          :color="ex2.color"
                          :label="ex2.label"
                      ></v-slider>
                    </v-row>
                    <v-row>
                      <v-slider
                          v-model="ex3.val"
                          :color="ex3.color"
                          :label="ex3.label"
                      ></v-slider>
                    </v-row>
                    <v-row>
                      <v-slider
                          v-model="ex4.val"
                          :color="ex4.color"
                          :label="ex4.label"
                      ></v-slider>
                    </v-row>
                    <v-row>
                      <v-slider
                          v-model="ex5.val"
                          :color="ex5.color"
                          :label="ex5.label"
                      ></v-slider>
                    </v-row>

                  </v-container>
                </v-col>
                <v-col cols="12"
                       md="4">
                  <v-container>
                    <v-row>
                      <v-slider
                          v-model="ex1.val"
                          :color="ex1.color"
                          :label="ex1.label"
                      ></v-slider>
                    </v-row>

                    <v-row>
                      <v-combobox
                          v-model="select"
                          :items="items"
                          label="Заведения"
                          multiple
                          chips
                      ></v-combobox>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                  <v-row justify="center">
                    <v-checkbox v-for="i in 5"
                                :key="i"
                                label="red"
                                color="red"
                                value="red"
                                hide-details
                    ></v-checkbox>
                  </v-row>
                </v-col>

              </v-row>


            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ex1: {label: 'Цена', val: 25, color: 'orange darken-3'},
      ex2: {label: 'Калорийность', val: 25, color: 'orange darken-3'},
      ex3: {label: 'Белки', val: 25, color: 'orange darken-3'},
      ex4: {label: 'Жиры', val: 25, color: 'orange darken-3'},
      ex5: {label: 'Углеводы', val: 25, color: 'orange darken-3'},
      select: ['Vuetify', 'Programming'],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
    }
  },
}
</script>
