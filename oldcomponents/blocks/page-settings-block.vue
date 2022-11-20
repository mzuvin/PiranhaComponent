<template>
  <div class="media-field" :class="{ empty: isEmpty }">
    <div class="media-picker">
      <div class="btn-group float-right">
        <button v-on:click.prevent="select" class="btn btn-primary text-center">
          <i class="fas fa-plus"></i>
        </button>
        <button v-on:click.prevent="remove" class="btn btn-danger text-center">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="card text-left">
        <div class="card-body" v-if="isEmpty">
          <span class="text-secondary">&nbsp;</span>
        </div>
        <div class="card-body" v-else-if="model.title != null">
          <a href="#">{{ model.title }}</a>
        </div>
        <div class="card-body" v-else>
          <a href="#">Başlık Girilmemiş</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["uid", "model"],
    methods: {
        select: function () {
            piranha.pagepicker.open(this.update);
        },
        remove: function () {
            this.model.id = null;
            this.model.title = null;
        },
        update: function (page) {
            if (page !== null) {
                var self = this;

                fetch(piranha.baseUrl + "manager/api/page/info/" + page.id)
                    .then(function (response) { return response.json(); })
                    .then(function (result) {
                        self.model.id = result.id;
                        self.model.title = result.title;

                        // Tell parent that title has been updated
                        self.$emit('updateid', result.id);
                    })
                    .catch(function (error) { console.log("error:", error ); });
            } else {
                console.log("No page was selected");
            }
        }
    },
    computed: {
        isEmpty: function () {
            return this.model.id == null;
        },
    },
    mounted: function() {
        
    }
}
</script>