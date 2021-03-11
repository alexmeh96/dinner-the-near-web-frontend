<template>
  <v-card>
    <v-card-title>
      Пользователи
    </v-card-title>
    <v-simple-table
        fixed-header
        height="300px"

    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Имя
          </th>
          <th class="text-left">
            Email
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="user in users"
            :key="user.email"
        >
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import User from "@/models/user";

export default {
  data () {
    return {
      users: [new User()]
    }
  },
  async mounted() {
    try {
      this.users = await this.$store.dispatch('allUsersAct')
    } catch {
      console.log('bad!')
    }
  }
}
</script>
