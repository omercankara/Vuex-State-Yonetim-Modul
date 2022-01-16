<template>
  <div>
    <p class="counter-container"> Sayaç : {{ counter }}</p>
    <input type="text" v-model="value">
    <p>{{value}}</p>
  </div>
</template>
<script>
  export default {
  computed:{
        counter(){
                return this.$store.getters.getDoubleCounter
        },
        value:{
                get(){
                        return this.$store.getters.getValue
                },
                set(value){
                        this.$store.dispatch("setValueData", value)
                }
        }
  }
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
