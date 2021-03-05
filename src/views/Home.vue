<template>
  <div class="home">
<!--    <HelloWorld />-->

    <SlideGroupMeal />
    <SlideGroupEstab />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SlideGroupMeal from "@/components/SlideGroupMeal";
import SlideGroupEstab from "@/components/SlideGroupEstab";

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    SlideGroupMeal,
    SlideGroupEstab
  }
}
</script>
