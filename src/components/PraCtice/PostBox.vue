<template>
      <div class="col-md-4 align-item-center">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Name : {{Persons.name}}</h5>
            <p class="mt-3">Last name : {{ Persons.lastname }}</p>
            <p class="my-2">age : {{ Persons.age }}</p>
            <p><i class="bi bi-telegram fs-2 mx-2"></i> id :{{ Persons.telegramid }} </p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">{{ Persons.number }}</a>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props:{
    Persons : Object,
  }
};
</script>

<style>
</style>