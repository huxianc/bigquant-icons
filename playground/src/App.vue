<script lang="ts" setup>
import { icons } from 'bigquant-icons-vue/global'
console.log(icons)
</script>

<template>
  <div style="font-size: 20px">
    <component
      :is="Icon"
      v-for="(Icon, key) in icons"
      :key="key"
      class="icon"
    />
    <hr />
    <component
      :is="`BQIcon${key}`"
      v-for="key in Object.keys(icons)"
      :key="key"
      class="icon"
    />
  </div>
</template>

<style>
.icon {
  /* width: 1em;
  height: 1em; */
  color: #202328;
  /* color: #e74c3c; */
}
</style>
