<script lang="ts" setup>
import { icons } from '@bigquant/icons-vue/global'
console.log(icons)
</script>

<template>
  <component :is="Icon" v-for="(Icon, key) in icons" :key="key" class="icon" />
  <hr />
  <component
    :is="`BQIcon${key}`"
    v-for="key in Object.keys(icons)"
    :key="key"
    class="icon"
  />
</template>

<style>
.icon {
  height: 16px;
  /* color: #202328; */
  color: #e74c3c;
}
</style>
