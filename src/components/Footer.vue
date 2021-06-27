<template>
  <div class="bg-sec-veryDarkBlue py-20">
    <div
      class="
        text-sec-grayishBlue
        max-w-screen-xl
        w-11/12
        m-auto
        grid grid-cols-1
        lg:grid-cols-5 lg:gap-24
        gap-y-14
        leading-9
        tracking-wide
      "
    >
      <div
        class="
          order-3
          lg:order-1
          flex
          lg:flex-col
          flex-col-reverse
          justify-center
        "
      >
        <div>
          <img
            class="pt-3 m-auto w-3/5 lg:w-full mt-14 lg:mt-0"
            src="@/assets/images/logo-2.svg"
            alt=""
          />
          <p class="mt-16 text-center lg:hidden">
            Copyright 2020. All Rights Reserved
          </p>
        </div>

        <div
          class="
            w-4/5
            lg:w-full
            flex
            m-auto
            justify-around
            lg:justify-between lg:mt-24
          "
        >
          <img src="@/assets/images/icon-facebook.svg" alt="icon" />
          <img src="@/assets/images/icon-youtube.svg" alt="icon" />
          <img src="@/assets/images/icon-twitter.svg" alt="icon" />
          <img src="@/assets/images/icon-pinterest.svg" alt="icon" />
          <img src="@/assets/images/icon-instagram.svg" alt="icon" />
        </div>
      </div>
      <div class="col-span-2 order-2 grid grid-cols-2">
        <div class="justify-self-center lg:justify-self-start">
          <ul>
            <li>Home</li>
            <li class="pt-3">Pricing</li>
            <li class="pt-3">Products</li>
            <li class="pt-3">About us</li>
          </ul>
        </div>
        <div class="justify-self-center lg:justify-self-end">
          <ul>
            <li>Career</li>
            <li class="pt-3">Community</li>
            <li class="pt-3">Privacy</li>
          </ul>
        </div>
      </div>
      <div class="col-span-2 order-1 lg:order-3 lg:justify-self-end">
        <div class="flex">
          <input
            class="
              rounded-full
              pl-4
              lg:pl-8 lg:pr-4
              focus:outline-none
              focus:ring-2
              focus:ring-pry-brightRed
              focus:border-transparent
            "
            type="text"
            placeholder="Updates in your inbox…"
          />
          <input
            class="
              px-9
              py-2
              lg:py-4
              rounded-full
              ml-2
              lg:ml-6
              bg-pry-brightRed
              text-white
            "
            type="button"
            value="Go"
          />
        </div>
        <p class="mt-16 text-right hidden lg:block">
          Copyright 2020. All Rights Reserved
        </p>
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
