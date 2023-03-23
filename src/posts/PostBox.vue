<template>
      <div class="col-md-4 align-item-center">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">tittle : {{ this.formhist }}</h5>
            <p class="mt-3">body : {{ }}</p>
            <p class="my-2">age : {{}}</p>
            <p><i class="bi bi-telegram fs-2 mx-2"></i> id :{{ }} </p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Submit</a>
          </div>
        </div>

      </div>
</template>

<script>
export default {
  props:{
    formhist : Object,
  },
 
};
</script>

<style>
</style>