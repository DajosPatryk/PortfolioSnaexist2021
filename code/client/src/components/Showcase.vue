<template>
  <div>
    <div class="title-container">
      <h1
        class="top-title font-title"
        style="font-weight:normal;text-align: center;"
      >
        2D & 3D Digital Artist / Frontend Designer
      </h1>
      <div class="title d-flex justify-center" height="50px">
        <h1 class="font-title" style="font-weight: normal;text-align: center;">
          I
        </h1>

        <div class="heart">
          <vue-star class="vuestar" animate="animated bounce" color="#fc035e"
            ><i slot="icon" class="mdi mdi-heart"></i
          ></vue-star>
        </div>

        <h1 class="font-title" style="font-weight: normal;text-align: center;">
          What I Do
        </h1>
      </div>
      <div class="image-gallery">
        <image-gallery :imagesArray="this.imagesArray" />
      </div>
    </div>
  </div>
</template>

<script>
import VueStar from "vue-star";
import ImageGallery from "./ImageGallery.vue";
export default {
  components: {
    VueStar,
    ImageGallery,
  },
  data() {
    return {
      imagesArray: require("./galleryFiles.json"),
    };
  },
};
</script>

<style lang="scss" scoped>
.image-gallery {
  padding: 0.5rem;
  position:sticky;
  top:-80px;
}
.top-title {
  font-size: 1.5em;
  margin-bottom: 0.5rem;
}
.title-container {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}
.title {
  width: 100%;
  text-align: center;
}
.heart {
  float: left;
  width: 50px;
  height: 100px;
  position: sticky;
  color: #ff9ec2;
}
.vuestar {
  top: -30px;
  left: -25px;
}
.heart:hover {
  animation: bounce;
  animation-duration: 1s;
}
.mdi-heart {
  font-size: 2em;
}
</style>
