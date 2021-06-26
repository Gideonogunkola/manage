<template>
  <div class="main text-base lg:text-xl text-sec-grayishBlue">
    <Header />
    <router-view />
  </div>
</template>

<style>
.main {
  font-family: "Be Vietnam", sans-serif;
  -webkit-tap-highlight-color: transparent;
}
button.VueCarousel-dot.VueCarousel-dot--active {
  background-color: #f25f3a !important;
}
button.VueCarousel-dot {
  background-color: #f25f3a7e !important;
}
</style>
