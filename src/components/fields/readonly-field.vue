<template>
    <div class="alert alert-secondary mb-0">
        <pre class="mb-0">{{ props.model.value }}</pre>
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
    required: false
  }
})
</script>