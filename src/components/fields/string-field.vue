<template>
  <div>
    <div v-if="maxLength() > 0" class="input-group">
      <input class="form-control" type="text" :maxlength="maxLength()" :required="isRequired()" :placeholder="props.meta.placeholder" v-model="props.model.value" v-on:change="update()"/>
      <div class="input-group-append">
        <div class="input-group-text text-muted">
          {{ props.model.value.length + "/" + maxLength() }}
        </div>
      </div>
    </div>
    <input v-else class="form-control" type="text" :maxlength="maxLength()" :required="isRequired()" :placeholder="props.meta.placeholder" v-model="props.model.value" v-on:change="update()"/>
  </div>
</template>

<script setup>
let props = defineProps({
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

var maxLength = ()=>{
  return props.meta.settings.MaxLength != null && props.meta.settings.MaxLength > 0 ?
      props.meta.settings.MaxLength : null;
}
function update(){
    // Tell parent that title has been updated
      //todo 1
    /*if (this.meta.notifyChange) {
      this.$emit('update-title', {
        uid: this.uid,
        title: this.model.value
      });
    }*/
}

var isRequired = ()=> false;
</script>

<style scoped>

</style>