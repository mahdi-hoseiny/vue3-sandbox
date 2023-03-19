<template>
 <div class="container">
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter your email address" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">{{ inputname }}</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button @click="changePasswordtitle" type="submit" class="btn btn-primary">Send data parent to chil</button>
    <button @click="Submit" type="submit" class="btn btn-primary ms-2">Submit</button>
    <button @click="sendData" class="btn btn-primary mx-2">Send data From child to parrent</button>
  </form>
</div>
</template>

<script>
export default {
props:{
    inputname : String ,
    changePasswordtitle: Function,
   
},
methods:{
  sendData(){
    this.$emit('sendData','webprog.ir')
    event.preventDefault()
  },
  Submit(){
    let inputValue = document.getElementById('exampleInputEmail1')
    console.log(inputValue);
    event.preventDefault()


  }
}
};
</script>

<style>
</style>