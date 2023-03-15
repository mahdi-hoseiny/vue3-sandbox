<template>
  <div class="container my-5 bg-primary text-white">
    <div class="row align-items-center">
      <div class="col-md-6  text-center">
        <button @click="senddata()" class="btn btn-light my-4">Send data</button>

      </div>
      <div class="col-md-6">
        <h3 v-for="(fruit, index) in fruits" :key="index" class="mt-3">
          {{ fruit }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fruits: Array,
  },
  data() {
    return {
      Person: {
        firstName: "mahdi",
        lastNAme: "hoseini",
      },
      Persons: ["ali", "reza", "ahmad", "mehdi"],
    };
  },

  methods: {
    senddata() {
      this.$emit("personDatafromChild", this.Persons);
    },
  },
};
</script>

<style>
</style>