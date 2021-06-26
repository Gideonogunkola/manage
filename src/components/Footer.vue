<template>
  <div class="bg-sec-veryDarkBlue py-20">
    <div
      class="
        max-w-screen-xl
        w-11/12
        m-auto
        grid grid-cols-1
        lg:grid-cols-5
        gap-24
        leading-9
        tracking-wide
        text-white
      "
    >
      <div>
        <img class="pt-3" src="@/assets/images/logo-2.svg" alt="" />
        <div class="flex justify-between mt-28">
          <img src="@/assets/images/icon-facebook.svg" alt="icon" />
          <img src="@/assets/images/icon-youtube.svg" alt="icon" />
          <img src="@/assets/images/icon-twitter.svg" alt="icon" />
          <img src="@/assets/images/icon-pinterest.svg" alt="icon" />
          <img src="@/assets/images/icon-instagram.svg" alt="icon" />
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-2">
        <div class="mt-0">
          <ul>
            <li>Home</li>
            <li class="pt-3">Pricing</li>
            <li class="pt-3">Products</li>
            <li class="pt-3">About us</li>
          </ul>
        </div>
        <div class="justify-self-end">
          <ul>
            <li>Career</li>
            <li class="pt-3">Community</li>
            <li class="pt-3">Privacy</li>
          </ul>
        </div>
      </div>
      <div class="col-span-2 justify-self-end">
        <div class="flex">
          <input
            class="rounded-full pl-8 pr-4"
            type="text"
            placeholder="Updates in your inbox…"
          />
          <input
            class="px-9 py-4 rounded-full lg:ml-6 bg-pry-brightRed"
            type="button"
            value="Go"
          />
        </div>
        <p class="mt-20 text-right">Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
