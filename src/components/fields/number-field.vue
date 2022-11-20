<template>
    <input class="form-control" type="text" :placeholder="props.meta.placeholder" v-model="props.model.value">
</template>

<script setup>
const props = defineProps({
  uid: {
    type: String,
    required: false
  },
  model:{
    type:Object,
    required: true
  },
  meta:{
    type:Object,
    required: true
  }
})
</script>