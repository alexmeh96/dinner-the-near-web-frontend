<template>
  <v-container class="mt-4">

    <v-container class="mb-10">
      <v-card
          class="mx-auto"
          max-width="500"
      >
        <v-card-text align="center">
          <div>Рекомендуем</div>
          <p class="display-1 text--primary">
            Рекомендуем
          </p>
          <p>adjective</p>
          <div class="text--primary">
            well meaning and kindly.<br>
            "a benevolent smile"
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
              text
              color="deep-purple accent-4"
          >
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container>
    <v-row>
      <v-col cols="12" md="4">

        <v-container>
          <v-card
              class="mx-auto"
              max-width="500"
          >
            <v-card-text align="center">
              <div>Word of the Day</div>
              <p class="display-1 text--primary">
                Завтрак
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>

      </v-col>

      <v-col cols="12" md="8">
        <v-slide-group
            active-class="success"
            show-arrows
        >
          <v-slide-item
              v-for="n in 3"
              :key="n">
            <v-container>
              <v-card width="400">

                <v-img
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"

                    height="240px"
                    :src="require('@/assets/img/dinner/meal2.png')"
                >
                  <v-container>
                    <v-card-title>
                      <div class="white--text font-weight-bold">VKUSNO</div>
                    </v-card-title>
                    <v-card-text>
                      <div class="white--text font-weight-bold">Грузинская кухня</div>
                    </v-card-text>

                  </v-container>

                  <v-container>
                    <v-row class="justify-space-between d-flex align-end">
                      <v-col cols="4">

                        <div class="white--text">
                          Вафли
                        </div>
                        <div class="white--text">
                          11 мин
                        </div>
                      </v-col>
                      <v-col cols="4">
                        <v-btn color="yellow" outlined class="white--text" btn-outline-border-width="20">300 ккал
                        </v-btn>

                      </v-col>
                    </v-row>
                  </v-container>

                </v-img>
              </v-card>
            </v-container>
          </v-slide-item>
        </v-slide-group>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12" md="4">

        <v-container>
          <v-card
              class="mx-auto"
              max-width="500"
          >
            <v-card-text align="center">
              <div>Word of the Day</div>
              <p class="display-1 text--primary">
                Обед
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>

      </v-col>

      <v-col cols="12" md="8">
        <v-slide-group
            active-class="success"
            show-arrows
        >
          <v-slide-item
              v-for="n in 3"
              :key="n">
            <v-container>
              <v-card width="400">

                <v-img
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"

                    height="240px"
                    :src="require('@/assets/img/dinner/meal2.png')"
                >
                  <v-container>
                    <v-card-title>
                      <div class="white--text font-weight-bold">VKUSNO</div>
                    </v-card-title>
                    <v-card-text>
                      <div class="white--text font-weight-bold">Грузинская кухня</div>
                    </v-card-text>

                  </v-container>

                  <v-container>
                    <v-row class="justify-space-between d-flex align-end">
                      <v-col cols="4">

                        <div class="white--text">
                          Вафли
                        </div>
                        <div class="white--text">
                          11 мин
                        </div>
                      </v-col>
                      <v-col cols="4">
                        <v-btn color="yellow" outlined class="white--text" btn-outline-border-width="20">300 ккал
                        </v-btn>

                      </v-col>
                    </v-row>
                  </v-container>

                </v-img>
              </v-card>
            </v-container>
          </v-slide-item>
        </v-slide-group>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12" md="4">

        <v-container>
          <v-card
              class="mx-auto"
              max-width="500"
          >
            <v-card-text align="center">
              <div>Word of the Day</div>
              <p class="display-1 text--primary">
                Ужин
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>

      </v-col>

      <v-col cols="12" md="8">
        <v-slide-group
            active-class="success"
            show-arrows
        >
          <v-slide-item
              v-for="n in 3"
              :key="n">
            <v-container>
              <v-card width="400">

                <v-img
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"

                    height="240px"
                    :src="require('@/assets/img/dinner/meal2.png')"
                >
                  <v-container>
                    <v-card-title>
                      <div class="white--text font-weight-bold">VKUSNO</div>
                    </v-card-title>
                    <v-card-text>
                      <div class="white--text font-weight-bold">Грузинская кухня</div>
                    </v-card-text>

                  </v-container>

                  <v-container>
                    <v-row class="justify-space-between d-flex align-end">
                      <v-col cols="4">

                        <div class="white--text">
                          Вафли
                        </div>
                        <div class="white--text">
                          11 мин
                        </div>
                      </v-col>
                      <v-col cols="4">
                        <v-btn color="yellow" outlined class="white--text" btn-outline-border-width="20">300 ккал
                        </v-btn>

                      </v-col>
                    </v-row>
                  </v-container>

                </v-img>
              </v-card>
            </v-container>
          </v-slide-item>
        </v-slide-group>
      </v-col>

    </v-row>
    </v-container>
  </v-container>
</template>
