<template>
  <div>
    <!-- Hero-section-starts -->
    <section class="hero-section">
      <div class="background">
        <div class="common h-screen pt-28 grid grid-cols-2 items-center gap-20">
          <div class="">
            <h2
              class="
                text-3xl
                md:text-4xl
                lg:text-6xl
                xl:text-7xl
                font-bold
                text-sec-darkBlue
              "
            >
              Bring everyone together to build better products.
            </h2>
            <p class="leading-9 tracking-wider py-10 lg:w-4/5">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button
              role="button"
              class="
                py-4
                px-10
                rounded-full
                text-white
                bg-pry-brightRed
                shadow-3xl
              "
            >
              Get Started
            </button>
          </div>
          <div class="">
            <img class="" src="@/assets/images/illustration-intro.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- Hero-section-ends -->

    <!-- feature-section-starts -->
    <!-- feature-section-starts -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.background {
  background: transparent;
}
.common {
  @apply max-w-screen-xl w-11/12 m-auto;
}
</style>
