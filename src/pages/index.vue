<template>
  <img alt="Vue logo" src="./../assets/logo.png" />
  <UsePinia />
  <br />
  <NButton>button</NButton>
  <router-link to="/login">点击跳转至login</router-link>
  <br /><br />
  <router-link to="/user">点击跳转至user页面</router-link>
  <br /><br />
  <router-link to="/vueuse">点击跳转至vueuse页面</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UsePinia from '@/components/UsePinia.vue';
import { NButton } from 'naive-ui'

export default defineComponent({
  name: 'IndexPage',
  components: {
    UsePinia, NButton
  },
});
</script>
