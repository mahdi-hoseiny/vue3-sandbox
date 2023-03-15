<template>
  <div class="container">
    <div class="row g-3">
      <div class="col-md-4">
        <div class="card-header">
          <h6>Post Number : {{ post.id }}</h6>
        </div>

        <router-link :to="{ name: 'postId', params: { id: post.id } }">
          {{ post.title }}
        </router-link>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="text-danger bold">Username </span>: {{ post.body }}
          </li>
          <li class="list-group-item">
            <span class="text-danger bold">email </span>: {{ post.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          post.value = response.data;
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
    getPost();

    return {
      post,
      loading,
      route,
    };
  },
};
</script>


<style>
</style>