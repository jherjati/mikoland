<script context="module">
  import Banner from "../components/home/banner.svelte";
  import Solution from "../components/home/solution.svelte";
  import Feature from "../components/home/feature.svelte";
  import Blog from "../components/home/blog.svelte";
  import Cta from "../components/home/cta.svelte";

  export const prerender = true;

  export async function load({ fetch }) {
    const [{ data }] = await Promise.all([
      fetch(
        `https://panel.mikoding.com/items/mikoding_blog?sort=date_created&fields=thumbnail,category,title,summary,date_created,user_created.first_name,user_created.last_name,user_created.avatar`
      ).then((r) => r.json()),
    ]);
    console.log(data);
    return {
      props: { blogs: data },
    };
  }
</script>

<script>
  export let blogs;
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>
<main>
  <script
    defer
    src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

  <Banner />
  <Solution />
  <Feature />
  <Blog {blogs} />
  <Cta />
</main>
