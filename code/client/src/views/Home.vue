<template>
  <div>
    <image-slider />
    <div class="bar">
      <div class="component">
        <about-me />
      </div>
    </div>
    <div class="bar subcolor">
      <div class="component">
        <showcase />
      </div>
    </div>
    <div class="bar">
      <div class="component">
        <social-media />
      </div>
    </div>
    <div class="bar subcolor">
      <div class="component">
        <projects />
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";
import AboutMe from "../components/AboutMe.vue";
import Showcase from "../components/Showcase.vue";
import SocialMedia from "../components/SocialMedia.vue"; 
import Projects from "../components/Projects.vue"; 
export default {
  name: "Home",

  components: {
    ImageSlider,
    AboutMe,
    Showcase,
    SocialMedia,
    Projects
  },
};
</script>
<style scoped>
.component {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 25%;
}
.component-big {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 50%;
}
.bar {
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.subcolor {
  background-color:#f0f0f0;
}
</style>
