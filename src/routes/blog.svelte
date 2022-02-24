<script context="module">
  export const prerender = true;

  export async function load({ fetch }) {
    const [{ data }] = await Promise.all([
      fetch(
        `https://panel.mikoding.com/items/mikoding_blog?sort=date_created&fields=title,summary,date_created`
      ).then((r) => r.json()),
    ]);
    return {
      props: { blogs: data },
    };
  }
</script>

<script>
  export let blogs;
  import { isNotif, notifMessage } from "../stores/snack";

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const objData = Object.fromEntries(formData.entries());
      let res = await fetch(
        "https://panel.mikoding.com/items/mikoding_feedback",
        {
          method: "POST",
          body: JSON.stringify({
            ...objData,
            first_name: "Pre",
            last_name: "Subscriber",
            subject: "Wanna join",
            message: "Make me your subscriber",
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.status > 299) throw Error();
      res = await res.json();
      if (res?.data.id) {
        notifMessage.set("Request sent successfuly");
        isNotif.set(true);
      }
    } catch (error) {
      notifMessage.set("Failed to send request");
      isNotif.set(true);
    } finally {
      setTimeout(() => {
        isNotif.set(false);
      }, 2500);
    }
  }
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div
    class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
  >
    <div>
      <h2
        class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
      >
        Learning Materials
      </h2>
      <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
        <p class="text-xl text-gray-500">
          Get weekly articles in your inbox about technology to grow your
          business.
        </p>
        <form
          on:submit={onSubmit}
          class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end"
        >
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 lg:max-w-xs"
              placeholder="Enter your email"
            />
          </div>
          <div
            class="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex"
          >
            <button
              type="submit"
              class="w-full bg-gradient-to-l from-teal-500 to-cyan-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white transition-all hover:from-teal-400 hover:to-cyan-500 hover:shadow-md hover:scale-110 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto sm:inline-flex"
            >
              Notify me
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
      {#each blogs as { title, summary, date_created } (title)}
        <div>
          <p class="text-sm text-gray-500">
            <time datetime="2020-03-16"
              >{new Date(date_created).toLocaleDateString()}</time
            >
          </p>
          <a href={"/blog/" + title} class="mt-2 block">
            <p class="text-xl font-semibold text-gray-900">
              {title}
            </p>
            <p class="mt-3 text-base text-gray-500">
              {summary}
            </p>
          </a>
          <div class="mt-3">
            <a
              href={"/blog/" + title}
              class="text-base font-semibold text-teal-600 hover:text-teal-500"
            >
              Read full story
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
