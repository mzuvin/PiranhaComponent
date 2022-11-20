<template>
    <!-- TODO v-on:change="update()"-->
    <select class="form-control" v-model="props.model.value" >
        <option v-for="(name, value) in props.meta.options" v-bind:key="value" v-bind:value="value">
            {{ name }}
        </option>
    </select>
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
//export default {
//    props: ["uid", "model", "meta"],
//    methods: {
//        update: function () {
//            // Tell parent that title has been updated
//            if (this.meta.notifyChange) {
//                this.$emit('update-title', {
//                    uid: this.uid,
//                    title: this.meta.options[this.model.value]
//                });
//            }
//        }
//    }
//}
</script>