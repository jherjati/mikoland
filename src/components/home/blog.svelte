<script>
  export let blogs;
</script>

<!-- Blog section -->
<div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
  <div class="relative">
    <div
      class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <h2
        class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
      >
        Blog
      </h2>
      <p
        class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
      >
        Helpful Resources
      </p>
      <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
        Some of our pieces related to technology tools can be found in these
        articles. We are on a mission to spread information to make businesses
        tech literate.
      </p>
    </div>
    <div
      class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
    >
      {#each blogs as { thumbnail, category, title, summary, date_created, user_created } (title)}
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              src={"https://panel.mikoding.com/assets/" + thumbnail}
              alt=""
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-cyan-600">
                <a href={"/blog/" + title} class="hover:underline">
                  {category}
                </a>
              </p>
              <a href={"/blog/" + title} class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {title}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {summary}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="/about">
                  <img
                    class="h-10 w-10 rounded-full"
                    src={"https://panel.mikoding.com/assets/" +
                      user_created.avatar}
                    alt={`${user_created.first_name} ${user_created.last_name}`}
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a href="/about" class="hover:underline">
                    {`${user_created.first_name} ${user_created.last_name}`}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16">
                    {new Date(date_created).toLocaleDateString()}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
