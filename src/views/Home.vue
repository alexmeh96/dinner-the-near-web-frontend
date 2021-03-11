<template>
  <div class="home">
<!--    <HelloWorld />-->

    <SlideGroupMeal />
    <SlideGroupRestaurant />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import SlideGroupMeal from "@/components/SlideGroupMeal";
import SlideGroupRestaurant from "@/components/SlideGroupRestaurant";

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    SlideGroupMeal,
    SlideGroupRestaurant
  },
  data: () => ({
  }),

}
</script>
