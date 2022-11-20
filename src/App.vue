<script setup>
import { ref, onMounted } from 'vue'
const isLoad=ref(false);
const model = ref([]);
const meta = ref({});
const toolbar = ref([]);
onMounted(()=>{
  model.value=window._model;
  meta.value=window._meta;
  toolbar.value=window._toolbar;
  isLoad.value=true;
})
</script>

<template>
  <div v-if="isLoad">
    <generic-block :model="model" :meta="meta" :toolbar="toolbar"/>
  </div>
</template>

<style scoped>

</style>
