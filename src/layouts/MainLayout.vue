<template>
  <v-app>
    <v-card>
      <v-app-bar app color="#4FC3F7">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Dinner the near</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn class="success" @click="$route">
          Войти
        </v-btn>

      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          app
          temporary
          color="#BBDEFB"
      >

        <v-list
            dense
            nav
        >
          <v-list-item
              v-for="item in items"
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

      </v-navigation-drawer>


    </v-card>

    <router-view/>


  </v-app>

</template>

<script>
export default {
  data: () => ({
        drawer: true,
        items: [
          {title: 'Главная', icon: 'mdi-view-dashboard', path: '/'},
          {title: 'Профиль', icon: 'mdi-forum', path: '/profile'},
          {title: 'Блюда', icon: 'mdi-forum', path: '/meal'},
          {title: 'Заведения', icon: 'mdi-forum', path: '/establishment'},
          {title: 'О нас', icon: 'mdi-forum', path: '/about'},
        ],
      }

  ),

}
</script>
