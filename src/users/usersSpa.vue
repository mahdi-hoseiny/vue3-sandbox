<template>
  <div class="container">
    <div class="row g-3">
      <div class="col-md-4" v-for="user in users" :key="user.id">
        <UserCardview :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import UserCardview from "./CardVue.vue";
export default {
  components: {
    UserCardview,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);

    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
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
    getUsers();

    return {
      users,
    };
  },
};
</script>


<style>
</style>