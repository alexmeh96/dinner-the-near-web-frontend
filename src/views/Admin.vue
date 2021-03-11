<template>
  <!--  <div class="text-center justify-center py-16">-->
  <div class="pa-6">
    <h1>Эта страница Admin</h1>

    <v-row>
      <v-col cols="12" md="4">
        <UserTable/>
      </v-col>

      <v-col cols="12" md="4">
        <MealTable/>
      </v-col>

      <v-col cols="12" md="4">
        <RestaurantTable/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <AddRestaurant/>
      </v-col>
      <v-col cols="12" md="6">
        <AddMeal/>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <AddRestaurantImg/>
      </v-col>
      <v-col cols="12" md="6">
        <AddMealImg/>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import UserTable from "@/components/table/UserTable";
import MealTable from "@/components/table/MealTable";
import RestaurantTable from "@/components/table/RestaurantTable";
import AddRestaurant from "@/components/AddRestaurant"
import AddMeal from "@/components/AddMeal"
import AddRestaurantImg from "@/components/AddRestaurantImg";
import AddMealImg from "@/components/AddMealImg";

export default {
  components: {
    UserTable, MealTable, RestaurantTable, AddRestaurant, AddMeal, AddRestaurantImg, AddMealImg
  }
}
</script>

