<template>
  <div class="card">
    <router-link :to="{ name: 'userId', params: { id: user.id } }">
      <div class="card-header">{{ user.name }}</div>
    </router-link>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username : {{ user.username }}</li>
      <li class="list-group-item">email: {{ user.email }}</li>
      <li class="list-group-item">website : {{ user.website }}</li>
      <li class="list-group-item">company : {{ user.company.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style>
</style>
