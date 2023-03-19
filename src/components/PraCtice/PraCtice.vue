<template>
  <div class="container">
    <div class="row g-3">

      <GmailInformation :inputname="inputname" 
      :changePasswordtitle="changePasswordtitle"
      @sendData="changeData($event)"
      />

      <PostBox v-for="(person , index) in Persons" :key="index" :Persons="person" />

    </div>
  </div>

  <FirstSection :fruits="fruits" @personDatafromChild="showData($event)" />
</template>

<script>
import PostBox from "@/components/PraCtice/PostBox.vue";
import FirstSection from "@/components/PraCtice/FirstSection.vue";
import GmailInformation from "@/components/PraCtice/GmailInformation.vue"
export default {
  components: {
    PostBox,
    FirstSection,
    GmailInformation,
  },
  data() {
    return {
      inputname : 'Password' ,
      fruits: ["banana", "apple", "orange", "potato"],
    
      Persons:[
        {name : 'ali'  , lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 654897},
        {name : 'reza' , lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 123123},
        {name : 'ahmad', lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 3245435},
        {name : 'javad', lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 65324897},
        {name : 'hamed', lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 654654897},  
        {name : 'ali'  , lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 654897},
        {name : 'reza' , lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 123123},
        {name : 'ahmad', lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 3245435},
        {name : 'javad', lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 65324897},
        {name : 'hamed', lastname : 'hoseini' , number:'09155129019' , age : 25 , telegramid : 654654897},
      ]
    };
  },
  methods: {
    changePasswordtitle(){
      this.inputname = "Password changed"
      event.preventDefault()
    },
    showData(event) {
      if (this.fruits == event) {
        this.fruits = ["banana", "apple", "orange", "potato"];
      } else {
        this.fruits = event;
      }
    },
    changeData(event){
      this.inputname = event
    },
    
  },
};
</script>

<style>
</style>