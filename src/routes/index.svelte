<script context="module">
  import Value from "../components/home/value.svelte";
  import Service from "../components/home/service.svelte";
  import Testi from "../components/home/testi.svelte";
  import Blog from "../components/home/blog.svelte";
  import Cta from "../components/home/cta.svelte";
  import Banner from "../components/home/banner.svelte";

  export const prerender = true;
</script>

<svelte:head>
  <title>Welcome</title>
</svelte:head>
<main>
  <script
    defer
    src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

  <Banner />
  <Service />
  <Value />
  <Testi />
  <Blog />
  <Cta />
</main>
