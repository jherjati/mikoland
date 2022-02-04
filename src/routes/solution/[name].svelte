<script context="module">
  export const prerender = true;

  export async function load({ params, fetch }) {
    const { name } = params;
    const [{ data }] = await Promise.all([
      fetch(`https://panel.mikoding.com/items/mikoding_solution/${name}`).then(
        (r) => r.json()
      ),
    ]);
    return {
      props: { data },
    };
  }
</script>

<script>
  export let data;
</script>

<svelte:head>
  <title>Solution</title>
</svelte:head>

<!-- Hook -->
<div class="relative bg-white py-16 sm:py-24">
  <div
    class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
  >
    <div class="relative sm:py-16 lg:py-0">
      <div
        aria-hidden="true"
        class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
      >
        <div
          class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"
        />
        <svg
          class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
          />
        </svg>
      </div>
      <div
        class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"
      >
        <!-- Testimonial card-->
        <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1581261946248-3f8d138d74dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
            alt=""
          />
          <div class="absolute inset-0 bg-teal-500 mix-blend-multiply" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-teal-600 via-teal-600 opacity-90"
          />
          <div class="relative px-8">
            <div class="h-12">
              <img class="h-full" src={data.quote_logo} alt="Workcation" />
              <!-- <IoLogoGoogle /> -->
            </div>
            <blockquote class="mt-8">
              <div class="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="relative">
                  {data.quote_sentence}
                </p>
              </div>

              <footer class="mt-4">
                <p class="text-base font-semibold text-teal-200">
                  {data.quote_person}
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
      <!-- Content area -->
      <div class="pt-12 sm:pt-16 lg:pt-20">
        <h2
          class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl"
        >
          {data.tagline}
        </h2>
        <div class="mt-6 text-gray-500 space-y-6">
          <p class="text-lg">
            {data.fact}
          </p>
          <p class="text-base leading-7">
            {data.offer}
          </p>
        </div>
      </div>

      <!-- Stats section -->
      <div class="mt-10">
        <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
          {#each Object.keys(data.metric) as key (key)}
            <div class="border-t-2 border-gray-100 pt-6">
              <dt class="text-base font-medium text-gray-500">
                {key}
              </dt>
              <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                {data.metric[key]}
              </dd>
            </div>
          {/each}
        </dl>
        <div class="mt-10">
          <a href="/contact" class="text-base font-medium text-teal-600">
            Learn more about how we're changing the standard <span
              aria-hidden="true">&rarr;</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Technologies -->
<div class="bg-gray-900">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
    <div class="lg:space-y-10">
      <h2 class="text-3xl font-extrabold text-white">Technology We Use</h2>
      <div class="mt-8 flow-root lg:mt-0">
        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
          {#each data.tech as tech (tech)}
            <div
              class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
            >
              <img class="h-12" src={tech} alt="Tuple" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<!-- FAQ offset -->
