<template>
  <a class="btn icon-btn btn-default" href="#">
    <img :src="require(`@/assets/currencies/${image}`)" class="badge-icon img-circle text-warning" />
    <AnimatedNumber :value="value" :formatValue="formatValue"/>
  </a>
</template>


<script>
import numeral from 'numeral';
import AnimatedNumber from '@/components/ui/AnimatedNumber'
export default {
  name: "CurrencyBadge",
  components: {
    AnimatedNumber
  },
  props: {
    value: Number,
    image: String
  },
  methods: {
    formatValue(value){
      return numeral(Math.floor(value)).format('0.[00]a')
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
  text-align: left;
}

@media(min-width: 992px){
  .icon-btn {
    min-width: 110px;
  }
}
</style>