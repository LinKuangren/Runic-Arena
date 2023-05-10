<template>
  <main>
    <div :class="{'open':showNav}">
    <MobileNavigation class="mobile-n"/>
    </div>
      <div id="navigation-icon">
        <div class="navigation-burger">
          <i class="fas fa-bars" v-if="mobileView"
        @click="showNav = !showNav"></i>
        </div>
        <router-link to="/">
            <img class="logo-mobile" src="../src/assets/logo.png" alt="Logo-site" href="../views/HomeView.vue">
        </router-link>
      </div>
      <Navigation v-if="!mobileView" />
    <div class="main">
      <RouterView></RouterView>
    </div>
    <Footer/>
  </main>
</template>

<script>
import MobileNavigation from "./components/MobileNavigation.vue"

export default {
    data: () => {
        return {
            mobileView: false,
            showNav: false
        }
    },
    methods: {
      handleView() {
        this.mobileView = window.innerWidth <= 480;
      }
    },
    components: {
      MobileNavigation
    },
    created() {
      this.handleView();
      window.addEventListener('resize', this.handleView);
    }
}
</script>
