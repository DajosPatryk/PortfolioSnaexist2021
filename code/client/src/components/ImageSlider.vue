<template>
  <agile
  :autoplay="true"
  :navButtons="false"
  :fade="true"
  > 
      <div class="slide">
          <v-img src="https://pbs.twimg.com/media/ExAh6WCWgAY0uWk?format=jpg&name=4096x4096">
          </v-img>
      </div>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile,
  },
  props: {
    images: Array,
  },
};
</script>

<style lang="scss" scoped></style>
