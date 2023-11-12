<template>
  <div>
    <button @click="show = !show">Open</button>

    <transition name="fade">
      <div v-if="show" class="modal">
        <p>
          <button @click="show = !show">Close</button>
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
