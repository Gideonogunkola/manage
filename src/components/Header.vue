<template>
  <div class="">
    <div
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
      <div class="lg:hidden">
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
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
