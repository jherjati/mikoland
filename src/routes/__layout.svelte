<script>
  import Footer from "../components/footer.svelte";
  import Header from "../components/header.svelte";
  import "../app.css";
  import Notif from "../components/contact/notif.svelte";
  import { isNotif, notifMessage } from "../stores/snack";

  let isNotifValue;
  isNotif.subscribe((value) => {
    isNotifValue = value;
  });
  let notifMessageValue;
  notifMessage.subscribe((value) => {
    notifMessageValue = value;
  });
</script>

<div class="bg-white">
  <div class="relative overflow-hidden">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
  {#if isNotifValue}
    <Notif notifMessage={notifMessageValue} />
  {/if}
  <script
    async
    defer
    data-website-id="b4f5d8d1-9371-4b25-81b1-2772970a8001"
    src="https://stats.mikoding.com/umami.js"></script>
</div>
