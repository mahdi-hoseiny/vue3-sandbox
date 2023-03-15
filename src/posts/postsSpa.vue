<template>
  <div class="container">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="col-md-4" v-for="post in posts" :key="post.id">
        <div class="card">
          <div class="card-header">
            <router-link :to="{ name: 'postId', params: { id: post.id } }">
              <h6>Post Number : {{ post.id }}</h6>
            </router-link>
          </div>

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
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    function getPost() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          posts.value = response.data;
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
      posts,loading
    };
  },
};
</script>


<style>
</style>