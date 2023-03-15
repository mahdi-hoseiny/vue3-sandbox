<template>
  <div class="container">
    <div class="row g-3">
      <div class="col-md-4">
        <UserCardview :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import UserCardview from "./CardVue.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    UserCardview,
  },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    getUser();

    return {
      user,
      loading,
    };
  },
};
</script>


<style>
</style>