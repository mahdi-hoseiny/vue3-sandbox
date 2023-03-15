<template>
  <h1>{{ tittle }}</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus autem ipsum deserunt similique placeat, vitae, aut, modi eum cupiditate neque aperiam inventore doloribus aliquid. Modi dolorum maiores quasi eos facere!</p>
</template>

<script>
import { ref } from "vue";
export default {
  setup(){
    const tittle = ref('not Found page');

    return {
      tittle
    }
  }
  
  
}
</script>


<style>

</style>