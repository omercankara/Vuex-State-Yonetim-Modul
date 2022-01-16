<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1 class="text-center">VUEX</h1>
        <hr>
        <app-result :counter="counter"></app-result>
        <hr>
        <app-counter @counterEvent="counter += $event"></app-counter>
        <br>
        <second-result></second-result>
      </div>
    </div>
  </div>
</template>

<script>
  import Result from "./components/Result";
  import result2 from "./components/secondResult.vue"
  import Counter from "./components/Counter";
  export default {
    data(){
      return {
        counter : 0
      }
    },
    components: {
      appResult: Result,
      appCounter: Counter,
      secondResult:result2
    }
  }
</script>

<style>
</style>
