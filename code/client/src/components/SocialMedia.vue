<template>
  <div>
    <div class="title-container">
      <h1
        class="top-title font-title"
        style="font-weight: normal; text-align: center"
      >
        My Social Media Presence
      </h1>
    </div>
    <div>
      <h1 class="font-title" style="font-weight: normal; text-align: center">
        I Work For My Recognition
      </h1>
      <div
        style="height: 24px"
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: 300,
        }"
      >
        <template>
          <twt
            tweet-id="1379491953054789632"
            cards="visible"
            conversation="all"
            lang="en"
            theme="light"
            align="left"
            :width="400"
            :length="800"
            :dnt="true"
          >
            <template v-slot:error>
              <span>Sorry, that tweet doesn’t exist!</span>
            </template>
          </twt>
        </template>
        <div>
          <transition name="slide-fade">
            <i-count-up
              v-if="this.showCounters"
              :start="-100"
              :endVal="400"
              :decimals="1"
              :duration="20"
              :options="options"
              :callback="callback"
            ></i-count-up>
          </transition>
          <transition name="slide-fade">
            <span v-if="this.showCounters">+</span>
          </transition>
        </div>
        <div>
          <transition name="slide-fade">
            <span v-if="this.showCounters">Followers on Twitter</span>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import Twt from "vue-tweet";
export default {
  components: {
    ICountUp,
    Twt,
  },
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
      },
      isVisible: true,
      showCounters: false,
    };
  },
  methods: {
    callback: function (ins) {
      ins.update(ins.endVal + 100);
    },
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
      if (entry.isIntersecting == true) {
        this.showCounters = true;
      }
      console.log(entry);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-title {
  font-size: 1.5em;
  margin-bottom: -0.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
