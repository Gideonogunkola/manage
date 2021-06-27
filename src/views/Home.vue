<template>
  <div>
    <!-- Hero-section-starts -->
    <section class="hero-section">
      <div class="background">
        <div
          class="
            common
            h-screen
            pt-28
            grid grid-cols-1
            lg:grid-cols-2
            items-center
            gap-20
          "
        >
          <div class="order-2 lg:order-1">
            <h2
              class="
                text-3xl
                md:text-4xl
                lg:text-6xl
                xl:text-7xl
                font-bold
                text-sec-darkBlue text-center
                lg:text-left
              "
            >
              Bring everyone together to build better products.
            </h2>
            <p
              class="
                text-center
                lg:text-left
                leading-9
                tracking-wider
                py-10
                lg:w-4/5
              "
            >
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div class="flex justify-center lg:justify-start">
              <button
                role="button"
                class="
                  py-4
                  px-10
                  rounded-full
                  text-white
                  bg-pry-brightRed
                  hover:bg-sec-darkBlue
                  duration-300
                  ease-linear
                  shadow-3xl
                "
              >
                Get Started
              </button>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <img class="" src="@/assets/images/illustration-intro.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- Hero-section-ends -->

    <!-- feature-section-starts -->
    <section class="features mt-80 lg:mt-0">
      <div class="background">
        <div
          class="
            common
            grid grid-cols-1
            lg:grid-cols-2
            items
            gap-y-5
            lg:gap-20
            my-32
          "
        >
          <div>
            <h3
              class="
                text-sec-darkBlue
                font-bold
                text-3xl
                md:text-4xl
                lg:text-5xl
                text-center
                lg:text-left
                w-4/5
                lg:w-full
                m-auto
              "
            >
              What’s different about Manage?
            </h3>
            <p
              class="
                text-center
                lg:text-left
                leading-9
                tracking-wider
                py-10
                lg:w-4/5
              "
            >
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div>
            <!-- feature-01 starts -->
            <div class="">
              <div
                class="
                  bg-pry-paleRed
                  lg:bg-transparent
                  rounded-l-full
                  flex
                  items-center
                "
              >
                <div
                  class="
                    bg-pry-brightRed
                    text-white
                    rounded-full
                    px-5
                    lg:py-4
                    py-2
                    lg:px-9
                    font-bold
                    inline-block
                  "
                >
                  01
                </div>
                <h4 class="pl-2 lg:pl-8 font-bold text-sec-darkBlue">
                  Track company-wide progress
                </h4>
              </div>

              <div>
                <div class="lg:ml-32">
                  <p class="leading-9 tracking-wider pt-4">
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </div>
            </div>
            <!-- feature-01 ends -->

            <!-- feature-02 starts -->
            <div class="mt-10">
              <div
                class="
                  bg-pry-paleRed
                  lg:bg-transparent
                  rounded-l-full
                  flex
                  items-center
                "
              >
                <div
                  class="
                    bg-pry-brightRed
                    text-white
                    rounded-full
                    lg:px-9
                    px-5
                    lg:py-4
                    py-2
                    font-bold
                    inline-block
                  "
                >
                  02
                </div>
                <h4 class="pl-2 lg:pl-8 font-bold text-sec-darkBlue">
                  Advanced built-in reports
                </h4>
              </div>

              <div>
                <div class="lg:ml-32">
                  <p class="leading-9 tracking-wider pt-4">
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </div>
            </div>
            <!-- feature-02 ends -->

            <!-- feature-03 starts -->
            <div class="mt-10">
              <div
                class="
                  bg-pry-paleRed
                  lg:bg-transparent
                  rounded-l-full
                  flex
                  items-center
                "
              >
                <div
                  class="
                    bg-pry-brightRed
                    text-white
                    rounded-full
                    lg:px-9
                    px-5
                    lg:py-4
                    py-2
                    font-bold
                    inline-block
                  "
                >
                  03
                </div>
                <h4 class="pl-2 lg:pl-8 font-bold text-sec-darkBlue">
                  Everything you need in one place
                </h4>
              </div>

              <div>
                <div class="lg:ml-32">
                  <p class="leading-9 tracking-wider pt-4">
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </div>
              </div>
            </div>
            <!-- feature-03 ends -->
          </div>
        </div>
      </div>
    </section>
    <!-- feature-section-starts -->

    <!-- testimonial-section-starts -->
    <section class="testimonial">
      <div class="">
        <h3
          class="
            text-sec-darkBlue
            font-bold
            text-3xl
            md:text-4xl
            lg:text-5xl
            text-center
            w-4/5
            lg:w-full
            m-auto
          "
        >
          What they've said?
        </h3>
        <div class="mt-20">
          <carousel
            :perPageCustom="[
              [350, 1],
              [1024, 3],
            ]"
          >
            <!-- firs-slide starts -->
            <slide class="relative">
              <div class="px-3">
                <img
                  class="absolute top-0 left-0 right-0 m-auto"
                  src="@/assets/images/avatar-anisha.png"
                  alt=""
                />
                <div
                  class="
                    mt-20
                    text-sec-grayishBlue
                    bg-grayColor
                    p-10
                    text-center
                  "
                >
                  <h5 class="font-bold text-sec-darkBlue pt-16">Anisha Li</h5>
                  <blockquote class="leading-9 tracking-wider pt-4">
                    “Manage has supercharged our team’s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”
                  </blockquote>
                </div>
              </div>
            </slide>
            <!-- first-slide ends -->

            <!-- second-slide starts -->
            <slide class="relative">
              <div class="px-3">
                <img
                  class="absolute top-0 left-0 right-0 m-auto"
                  src="@/assets/images/avatar-ali.png"
                  alt=""
                />
                <div
                  class="
                    mt-20
                    text-sec-grayishBlue
                    bg-grayColor
                    p-10
                    text-center
                  "
                >
                  <h5 class="font-bold text-sec-darkBlue pt-16">Ali Bravo</h5>
                  <blockquote class="leading-9 tracking-wider pt-4">
                    “We have been able to cancel so many other subscriptions
                    since using Manage. There is no more cross-channel confusion
                    and everyone is much more focused.”
                  </blockquote>
                </div>
              </div>
            </slide>
            <!-- second-slide ends -->

            <!-- third-slide starts -->
            <slide class="relative">
              <div class="px-3">
                <img
                  class="absolute top-0 left-0 right-0 m-auto"
                  src="@/assets/images/avatar-richard.png"
                  alt=""
                />
                <div
                  class="
                    mt-20
                    text-sec-grayishBlue
                    bg-grayColor
                    p-10
                    text-center
                  "
                >
                  <h5 class="font-bold text-sec-darkBlue pt-16">
                    Richard Watts
                  </h5>
                  <blockquote class="leading-9 tracking-wider pt-4">
                    “Manage allows us to provide structure and process. It keeps
                    us organized and focused. I can’t stop recommending them to
                    everyone I talk to!”
                  </blockquote>
                </div>
              </div>
            </slide>
            <!-- third-slide ends -->

            <!-- fourth-slide starts -->
            <slide class="relative">
              <div class="px-3">
                <img
                  class="absolute top-0 left-0 right-0 m-auto"
                  src="@/assets/images/avatar-shanai.png"
                  alt=""
                />
                <div
                  class="
                    mt-20
                    text-sec-grayishBlue
                    bg-grayColor
                    p-10
                    text-center
                  "
                >
                  <h5 class="font-bold text-sec-darkBlue pt-16">
                    Shanai Gough
                  </h5>
                  <blockquote class="leading-9 tracking-wider pt-4">
                    “Their software allows us to track, manage and collaborate
                    on our projects from anywhere. It keeps the whole team
                    in-sync without being intrusive.”
                  </blockquote>
                </div>
              </div>
            </slide>
            <!-- fourth-slide ends -->
          </carousel>
          <div class="flex justify-center mt-20">
            <div
              role="button"
              class="
                bg-pry-brightRed
                hover:bg-sec-darkBlue
                duration-300
                ease-linear
                text-white
                rounded-full
                px-9
                py-4
                font-bold
                inline-block
                shadow-3xl
              "
            >
              Get Started
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- testimonial-section-ends -->

    <!-- call-to-action-section-starts -->
    <section class="call-to-action mt-32">
      <div class="bg-pry-brightRed py-20">
        <div class="common grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3
              class="
                text-white
                font-bold
                text-3xl
                md:text-4xl
                lg:text-5xl
                text-center
                lg:text-left
                pb-10
              "
            >
              Simplify how your team works today.
            </h3>
          </div>
          <div class="flex justify-center lg:justify-end items-center">
            <div
              role="button"
              class="
                bg-white
                text-pry-brightRed
                border-pry-brightRed border-2
                hover:border-white
                duration-300
                ease-linear
                rounded-full
                px-9
                py-4
                font-bold
                inline-block
                shadow-3xl
              "
            >
              Get Started
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- call-to-action-section-ends -->
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
