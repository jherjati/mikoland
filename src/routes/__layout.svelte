<script>
  import Footer from "../components/footer.svelte";
  import Header from "../components/header.svelte";
  import "../app.css";
</script>

<div class="bg-white">
  <div class="relative overflow-hidden">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</div>
