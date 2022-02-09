<script>
  import MdArrowDropDownCircle from "svelte-icons/md/MdArrowDropDownCircle.svelte";
  let inview = false;

  setTimeout(() => {
    inview = true;
  }, 1);
</script>

<section class="pt-4 bg-gray-900 sm:pt-10 lg:pt-8 lg:pb-14 lg:overflow-hidden">
  <div class="mx-auto max-w-7xl lg:px-8">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
      <div
        class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
      >
        <div class="lg:pt-14">
          <h1
            class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
          >
            <span
              class={`block transition-all duration-700 ${
                inview
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}>A correct way to</span
            >
            <span
              class={`transition-all duration-700 delay-100 ${
                inview
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              } pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5`}
              >transform your business</span
            >
          </h1>
          <div class="my-5 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            <p
              style="transition-delay:1s"
              class={`transition-opacity duration-500 ${
                inview ? "opacity-100" : "opacity-0"
              }`}
            >
              <span class="block text-2xl font-bold text-white">44%</span>
              <span class="mt-1 block text-base text-gray-300"
                ><span class="font-medium text-white">Organizations</span> have
                <span class="font-medium text-white">already started</span>
                implementing a digital-first approach to business processes (<a
                  href="https://cdn2.hubspot.net/hubfs/1624046/Digital%20Business%20Executive%20Summary_FINAL.pdf?t=1534365095051"
                  target="_blank"
                  class="text-sky-300 text-sm">source</a
                >).</span
              >
            </p>

            <p
              style="transition-delay:2s"
              class={`transition-opacity duration-500 ${
                inview ? "opacity-100" : "opacity-0"
              }`}
            >
              <span class="block text-2xl font-bold text-white">56%</span>
              <span class="mt-1 block text-base text-gray-300"
                ><span class="font-medium text-white">CEOs</span> said that
                digital improvements have already
                <span class="font-medium text-white"
                  >led to increases in revenue</span
                >
                (<a
                  href="https://www.gartner.com/en/newsroom/press-releases/2017-04-24-gartner-survey-shows-42-percent-of-ceos-have-begun-digital-business-transformation"
                  target="_blank"
                  class="text-sky-300 text-sm">source</a
                >).</span
              >
            </p>

            <p
              style="transition-delay:3s"
              class={`transition-opacity duration-500 ${
                inview ? "opacity-100" : "opacity-0"
              }`}
            >
              <span class="block text-2xl font-bold text-white">88%</span>
              <span class="mt-1 block text-base text-gray-300"
                ><span class="font-medium text-white">Customers</span> less
                likely to <span class="font-medium text-white">return</span> due
                to poor digital experience (<a
                  href="https://blog.cylindo.com/ux-fixes-for-increased-conversion-rates"
                  target="_blank"
                  class="text-sky-300 text-sm">source</a
                >).</span
              >
            </p>

            <p
              style="transition-delay:4s"
              class={`transition-opacity duration-500 ${
                inview ? "opacity-100" : "opacity-0"
              }`}
            >
              <span class="block text-2xl font-bold text-white">26%</span>
              <span class="mt-1 block text-base text-gray-300"
                ><span class="font-medium text-white">More profit</span> for
                company with digital maturity than less mature competitors (<a
                  href="http://ide.mit.edu/news-blog/blog/digitally-mature-firms-are-26-more-profitable-their-peers"
                  target="_blank"
                  class="text-sky-300 text-sm">source</a
                >).</span
              >
            </p>
          </div>
          <!-- <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
            We are immensely passionate to let you enjoy surfing on this wave of
            digital transformation
          </p>
          <div class="mt-10 sm:mt-12">
            <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
              <div class="sm:flex">
                <div class="min-w-0 flex-1">
                  <label for="email" class="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                  />
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium transition-all hover:from-teal-400 hover:to-cyan-500 hover:shadow-md hover:scale-110 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    >Subscribe</button
                  >
                </div>
              </div>
              <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                Start your free newsletter subscription. Never miss our latest
                and greatest technology updates.
              </p>
            </form>
          </div> -->
        </div>
      </div>
      <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
        >
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_aa0wy04q.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class={`w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none transition-opacity duration-500 delay-200 ${
              inview ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
    <div class="text-white flex justify-center items-center pt-6 lg:pb-14">
      <span
        class={`hidden lg:block h-10 w-10 shadow-lg animate-bounce transition-opacity duration-500 ${
          inview ? "opacity-100" : "opacity-0"
        }`}
        style="transition-delay:5s"><MdArrowDropDownCircle /></span
      >
    </div>
  </div>
</section>
