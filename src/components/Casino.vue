<template>
  <div class="row">
    <div class="col-md-12">
      <b-card title="Casino" sub-title="Win awesome rewards">
        <SlotMachine />
      </b-card>
    </div>
  </div>
</template>

<script>
import SlotMachine from "@/components/slot-machine/SlotMachine"

export default {
  name: "Casino",
  components: {
    SlotMachine
  }
};
</script>

<style scoped>
.chest-image {
  height: 50px;
  margin-right: 10px;
}

.currency-icon {
  height: 20px;
}
</style>
