<template>
  <div class="home">

    <h2>{{ appTitle }}</h2>

    <h3>{{ counterData.title }}:</h3>

    <div>
      <button @click="decreaseCounter(largeIncrementAmount)" class="btn">--</button>
      <button @click="decreaseCounter()" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter()" class="btn">+</button>
      <button @click="increaseCounter(largeIncrementAmount)" class="btn">++</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-auto-focus>
    </div>

  </div>
</template>

<script setup lang="ts">
import { nextTick, onUpdated, reactive, watch } from 'vue'
import vue from '@vitejs/plugin-vue'

const largeIncrementAmount = 5
const appTitle = 'My Ok Counter App'

// const counter = ref(0),
//       counterTitle = ref('My Counter')

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})
const increaseCounter = (amount: number = 1) => {
  counterData.count += amount
}

const decreaseCounter = (amount: number = 1) => {
  counterData.count = counterData.count - amount > 0 ? counterData.count - amount : 0
}

function minLevelReached(newCount: number, oldCount: number) {
  if (newCount === 0) {
    setTimeout(() => alert('Counter is has reached zero'), 0)
  }
}

watch (() => counterData.count, minLevelReached, { flush: 'post' })

const vAutoFocus = {
  mounted(el: HTMLInputElement) {
    el.focus()
    el.select()
  }
}

</script>

<style>
body {
  align-items: baseline;
}

#app {
  margin: 0px;
}

.home {
  padding: 0px;
  font-size: 40px;
  text-align: center;
}

.btn, .counter {
  font-size: 80px;
  margin: 10px;
  background: grey;
}

.counter {
  background: none;
  color: orange;
}

.edit {
  margin-top: 60px;
}
</style>