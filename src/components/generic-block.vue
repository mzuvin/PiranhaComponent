<template>
 <div class="block-body">
    <div class="row">
     
      <div class="form-group" :class="{ 'col-sm-6': field.meta.isHalfWidth, 'col-sm-12': !field.meta.isHalfWidth }" v-bind:key="'field' + field.meta.uid" v-for="field in model">
        <label>{{ field.meta.name }}</label>
        <div v-if="field.meta.description != null" v-html="field.meta.description" class="field-description small text-muted"></div>
        <!--v-on:update-title="updateTitle($event)"-->
        <component v-bind:is="field.meta.component" v-bind:uid="field.meta.uid" v-bind:meta="field.meta" v-bind:toolbar="toolbar" v-bind:model="field.model" ></component>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    uid: {
      type: String,
      required: false
    },
    toolbar:{
      type:Object,
      required:true,
    },
    model:{
      type:Array,
      required:true
    }
  })
</script>

<style scoped>

</style>