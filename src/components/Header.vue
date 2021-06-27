<template>
  <div class="">
    <div
      v-if="show"
      class="
        max-w-screen-xl
        w-11/12
        h-28
        absolute
        items-center
        justify-between
        flex
        left-0
        right-0
        m-auto
        bg-transparent
      "
    >
      <div>
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="logo" />
        </router-link>
      </div>
      <div class="lg:hidden" @click="open">
        <img src="@/assets/images/icon-hamburger.svg" alt="" />
      </div>

      <div class="hidden lg:block w-2/5">
        <ul
          class="flex items-center justify-between font-bold text-sec-darkBlue"
        >
          <li><router-link to="/">Pricing</router-link></li>
          <li><router-link to="/">Product</router-link></li>
          <li><router-link to="/">About Us</router-link></li>
          <li><router-link to="/">Careers</router-link></li>
          <li><router-link to="/">Community</router-link></li>
        </ul>
      </div>
      <div class="hidden lg:block">
        <div
          role="button"
          class="py-4 px-10 rounded-full text-white bg-pry-brightRed shadow-3xl"
        >
          Get Started
        </div>
      </div>
    </div>

    <!-- mobile-navigation -->
    <div class="fixed">
      <div
        class="absolute bg-sec-veryDarkBlue bg-opacity-20 w-screen h-screen"
        v-if="load"
      >
        <div
          class="
            max-w-screen-xl
            w-11/12
            h-28
            m-auto
            items-center
            justify-between
            flex
            absolute
            right-0
            left-0
          "
        >
          <div>
            <router-link to="/">
              <img src="@/assets/images/logo.svg" alt="logo" />
            </router-link>
          </div>
          <div class="lg:hidden" @click="close">
            <img src="@/assets/images/icon-close.svg" alt="" />
          </div>
        </div>
        <div class="bg-white w-11/12 m-auto rounded shadow-lg">
          <ul
            class="
              py-10
              mt-32
              items-center
              justify-between
              font-bold
              text-sec-darkBlue text-center
            "
          >
            <li class="pb-6"><router-link to="/">Pricing</router-link></li>
            <li class="pb-6"><router-link to="/">Product</router-link></li>
            <li class="pb-6"><router-link to="/">About Us</router-link></li>
            <li class="pb-6"><router-link to="/">Careers</router-link></li>
            <li><router-link to="/">Community</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- mobile-navigation -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      load: false,
      show: true,
    };
  },
  methods: {
    open() {
      this.load = true;
      this.show = false;
    },
    close() {
      this.load = false;
      this.show = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
