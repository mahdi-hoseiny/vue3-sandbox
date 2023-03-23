<template>
  <div class="container">
    <div class="row">
      <h2 class="mb-4">Create post</h2>
      <div class="col-md-6">
        <form @submit.prevent="validate">
          <div class="form-group">
            <label class="mb-4">Tittle</label>
            <input type="text" class="form-control" v-model.lazy="form.title" />
            <small class="form-text text-danger" v-show="this.form.title == ''">
              {{ this.form.titleEror }}
            </small>
          </div>
          <div class="form-group">
            <label class="my-3">Body</label>
            <textarea class="form-control" v-model.lazy="form.body"></textarea>

            <small class="form-text text-danger" v-show="this.form.body == ''">
              {{ this.form.bodyEror }}
            </small>
          </div>
          <button type="submit" class="btn btn-dark my-3">Submit</button>
        </form>
      </div>
      <PostBox  :formHistory="formhist" v-for="(index , formhist) in formHistory" :key="index"/>

    </div>
  </div>
</template>

<script>
import PostBox from "@/posts/PostBox.vue"
import Swal from "sweetalert2";
export default {
  components :{
    PostBox,
  },
  data() {
    return {
      form: {
        title: "",
        body: "",
        titleEror: "",
        bodyEror: "",
      },
      formHistory : [],
    };
  },
  methods: {
    validate() {
      if (this.form.title === "") {
        this.form.titleEror = "Tittle Required";
      } else {
        this.form.titleEror = "";
      }

      if (this.form.body === "") {
        this.form.bodyEror = "Body Required";
      } else {
        this.form.bodyEror = "";
      }
      if (this.form.title === "" && this.form.body === "") {
        Swal.fire({
          title: "Error!",
          text: "Please Fill The blanks",
          icon: "error",
          confirmButtonText: "Cool",
        });
      }
      else if(this.form.title != "" && this.form.body != ""){
        Swal.fire({
          title: "Thanks!",
          text: "Post Created",
          icon: "success",
          confirmButtonText: "Accept",
        });
        this.formHistory.push(this.form);
        console.log(this.formHistory)
      }
    },
  },
};
</script>

<style>
</style>