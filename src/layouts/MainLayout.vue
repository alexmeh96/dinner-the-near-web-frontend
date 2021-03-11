<template>
  <v-app>
    <v-card>
      <!--      <v-app-bar app color="#4FC3F7">-->
      <!--        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->

      <!--        <v-app-bar-title>DinnerTheNear</v-app-bar-title>-->
      <!--        <v-spacer></v-spacer>-->
      <!--        <v-btn class="success" @click="$route">-->
      <!--          Войти-->
      <!--        </v-btn>-->

      <!--      </v-app-bar>-->

      <v-app-bar
          app
          color="primary"
          dark
          src="food.jpg"
          prominent
          shrink-on-scroll

      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>DinnerTheNear</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

<!--        <v-btn icon>-->
<!--          <v-icon>mdi-dots-vertical</v-icon>-->
<!--        </v-btn>-->
        <v-menu
            left
            bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                @click="subMenu"
            >
              <v-list-item-title v-if="$store.getters.getLoggedIn">Выйти</v-list-item-title>
              <v-list-item-title v-else>Войти</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer
          v-model="drawer"
          app
          temporary

      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              DinnerTheNear
            </v-list-item-title>
            <v-list-item-subtitle>
              Меню
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
            dense
            nav
            v-if="$store.getters.getUser.isAdmin"
        >
          <v-list-item
              v-for="item in itemsAdmin"
              :key="item.title"
              :to="item.path"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>
        <v-list
            dense
            nav
            v-else
        >
          <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.path"
          >
            <!--            v-if="$store.getters.getUser.isAdmin"-->

            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>

      </v-navigation-drawer>


    </v-card>

    <router-view/>


  </v-app>

</template>

<script>
export default {
  data: () => ({
        drawer: true,
        itemsAdmin: [
          {title: 'Главная', icon: 'mdi-view-dashboard', path: '/'},
          {title: 'Профиль', icon: 'mdi-account', path: '/profile'},
          {title: 'Блюда', icon: 'mdi-food-apple', path: '/meal'},
          {title: 'Заведения', icon: 'mdi-silverware', path: '/establishment'},
          {title: 'О нас', icon: 'mdi-help-box', path: '/about'},
          {title: 'Админ', icon: 'mdi-account-cog', path: '/admin'},
        ],

        items: [
          {title: 'Главная', icon: 'mdi-view-dashboard', path: '/'},
          {title: 'Профиль', icon: 'mdi-account', path: '/profile'},
          {title: 'Блюда', icon: 'mdi-food-apple', path: '/meal'},
          {title: 'Заведения', icon: 'mdi-silverware', path: '/establishment'},
          {title: 'О нас', icon: 'mdi-help-box', path: '/about'},
        ],
      }
  ),
  methods: {

    subMenu() {
      if (this.$store.getters.getLoggedIn) {
        this.$store.dispatch('logoutAct')
        this.$router.push('/login')
      } else {
        this.$router.push('/login')
      }

    },
  }

}
</script>
