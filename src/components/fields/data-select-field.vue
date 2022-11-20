<template>
  <!-- TODO v-on:change="update()"-->
    <select class="form-control" v-model="props.model.id" >
        <option v-for="(item) in props.model.items.$values" v-bind:key="item.id" v-bind:value="item.id">
            {{ item.name }}
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
    required: false
  }
});

//    methods: {
//        update: function () {
//            // Tell parent that title has been updated
//            if (this.meta.notifyChange) {
//                this.$emit('update-title', {
//                    uid: this.uid,
//                    title: this.model.items.$values.find(v => v.id === this.model.id).name
//                });
//            }
//        }
//    }
//}
</script>