<template>
  <div class="home">
    <h3 class="title">{{ appTitle }}:</h3>
    <button @click="decreaseCounter" class="btn">-</button>
    <span class="counter">{{ counterData.count }}</span>
    <button @click="increaseCounter" class="btn">+</button>

  </div>


</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const appTitle = "My OK Counter App"

// All code will go inside setup function.
const increaseCounter = () => {
  counterData.count++
}

const decreaseCounter = () => {
  counterData.count--
}

const counterData = reactive({
  count: 0,
})

</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.title {
  font-size: 36px;
}

.editTitle {
  margin-top: 60px;
}
</style>