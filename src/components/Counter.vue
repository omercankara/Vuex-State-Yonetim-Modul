<template>
        <div>
                <button class="btn btn-success" @click="increaseCounter">
                        + Arttır
                </button>
                <button class="btn btn-danger" @click="decreaseCounter">
                        - Azalt
                </button>
                <hr />

                <button class="btn btn-success" @click="increment">
                        + Actions Arttır
                </button>
                <button class="btn btn-danger" @click="decrement">
                        - Actions Azalt
                </button>
                <hr>
                 <button class="btn btn-danger" @click="incAsync({time:3000})">
                        Async Arttir
                </button>
        </div>
</template>

<script>
import { mapMutations,mapActions } from "vuex";
export default {
        methods: {
                ...mapMutations(["increaseCounter", "decreaseCounter"]),
                ...mapActions(["increment","decrement","incAsync"]),
              
        },
};
</script>

<style>
</style>
