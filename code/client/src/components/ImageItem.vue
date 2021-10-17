<template>
  <div>
    <v-img
      @click="dialog = true"
      :src="this.item.link"
      width="10rem"
      height="20rem"
    />
    <v-dialog v-model="dialog" width="25rem">
      <!-- TEMPLATE BY VUE LIBRARY, doesn't work
      <template v-slot:activator="{ on, attrs }">
        <v-img
          v-bind="attrs"
          v-on="on"
          :src="this.item.link"
          width="10rem"+
          
          height="20rem"
        />
      </template> -->
      <v-img :src="this.item.link" class="dialog-image window-color" />
      <div class="window-color" style="padding-top:1rem;padding-bottom:1rem;padding-right:2rem;padding-left:2rem;">
        <h1
          class="top-title font-title"
          style="font-weight:normal;text-align: center;"
        >{{this.item.name}}</h1>
        <h3 v-if="this.item.subname!=null" class="font-text" style="text-align: center;color:lightgrey;">{{this.item.subname}}</h3>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.dialog-image {
  margin: auto;
  max-width: none;
  max-height: 50%;
  object-fit: contain;
  overflow: hidden;
}
.window-color {
    background-color:white !important;
}
</style>
