<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <template>
          <v-img src="@/assets/logo/logocolor.png" width="3.5rem"></v-img>
        </template>
      </div>

      <v-spacer></v-spacer>

      <template>
        <div class="d-flex align-center">
          <v-btn
            v-if="this.$route.name.toUpperCase() == 'HOME'"
            color="#d90068"
            class="small-gap topbar-btn font-thick"
            :ripple="false"
            plain
            light
            @click="$router.push('/')"
          >
            Home
          </v-btn>
          <v-btn
            v-if="this.$route.name.toUpperCase() != 'HOME'"
            class="small-gap topbar-btn font-thick"
            :ripple="false"
            plain
            light
            @click="$router.push('/')"
          >
            Home
          </v-btn>
          <v-btn
            v-if="this.$route.name.toUpperCase() == 'ABOUT'"
            color="#d90068"
            class="small-gap topbar-btn font-thick"
            :ripple="false"
            plain
            light
            @click="$router.push('/About')"
          >
            About
          </v-btn>
          <v-btn
            v-if="this.$route.name.toUpperCase() != 'ABOUT'"
            class="small-gap topbar-btn font-thick"
            :ripple="false"
            plain
            light
            @click="$router.push('/About')"
          >
            About
          </v-btn>
          <v-btn
            v-if="this.$route.name.toUpperCase() == 'CONTACT'"
            color="#d90068"
            class="small-gap topbar-btn font-thick"
            :ripple="false"
            plain
            light
            @click="$router.push('/Contact')"
          >
            Contact
          </v-btn>
          <v-btn
            v-if="this.$route.name.toUpperCase() != 'CONTACT'"
            class="small-gap topbar-btn font-thick"
            :ripple="false"
            plain
            light
            @click="$router.push('/Contact')"
          >
            Contact
          </v-btn>
        </div>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
@import "./sass/variables.scss";
.small-gap {
  margin: 0.1rem;
}
.no-italics {
  font-style: normal;
}
.topbar-btn:hover {
  animation: tada;
  animation-duration: 0.8s;
}
</style>
