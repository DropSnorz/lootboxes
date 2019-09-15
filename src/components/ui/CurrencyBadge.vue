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
  computed: {
    displayNumber: function() {
      return this.value ? this.value : 0
    }
  },
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