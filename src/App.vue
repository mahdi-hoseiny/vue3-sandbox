<template>
  <HeaderSpa />

  <div class="container"></div>

  <router-view></router-view>
</template>

<script>
import HeaderSpa from "./components/sections/HeaderSpa.vue";
import { setup, ref, provide, reactive } from "vue";

export default {
  components: {
    HeaderSpa,
    
  },
  data() {
    return {
      fruits: ["banana", "apple", "orange", "potato"],
    };
  },
  methods: {
    
  },

  setup() {
    const count = ref(0);

    const info = reactive({
      name: "reza",
      familyname: " hoseini",
      age: 25,
      gmail: "mahdihoseini3561@gmail.com",
    });

    provide("info", info);

    return {
      count,
      setup,
    };
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

.mr-1 {
  margin-right: 1rem;
}
</style>
