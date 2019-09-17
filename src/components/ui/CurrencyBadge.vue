<template>
  <a class="btn icon-btn btn-default" href="#">
    <img :src="require(`@/assets/currencies/${image}`)" class="badge-icon img-circle text-warning" />
    {{this.displayNumber}}
  </a>
</template>


<script>
export default {
  name: "CurrencyBadge",
  props: {
    value: Number,
    image: String
  },
  data: function() {
    return {
      displayNumber: this.value ? this.value : 0,
      interval: false
    };
  },
  computed: {
    number: function(){
      return this.value ? this.value : 0
    }
  },
  watch: {
    number: function() {
      clearInterval(this.interval)
      if (this.number == this.displayNumber) {
        return;
      }
      this.interval = window.setInterval(
        function() {
          if (this.displayNumber != this.number) {
            let change = (this.number - this.displayNumber) / 10
            change = change >= 0 ? Math.ceil(change) : Math.floor(change)
            this.displayNumber = this.displayNumber + change
          }
        }.bind(this),20);
    }
  }
};
</script>

<style scoped>
.badge-icon {
  height: 22px;
  margin-right: 4px;
  margin-left: 4px;
}
.icon-btn {
  margin-left: 10px;
  padding: 1px 15px 3px 2px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>