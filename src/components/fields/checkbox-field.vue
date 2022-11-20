<template>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" :id="props.meta.uid" v-model="props.model.value">
        <label class="form-check-label" :for="props.meta.uid">{{ props.meta.placeholder}}</label>
    </div>
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