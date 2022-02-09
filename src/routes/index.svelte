<script context="module">
  import Banner from "../components/home/banner.svelte";
  import Solution from "../components/home/solution.svelte";
  import Feature from "../components/home/feature.svelte";
  import Testi from "../components/home/testi.svelte";
  import Blog from "../components/home/blog.svelte";
  import Cta from "../components/home/cta.svelte";

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
  <Solution />
  <Feature />
  <Testi />
  <Blog />
  <Cta />
</main>
