<script>
  import MdFastForward from "svelte-icons/md/MdFastForward.svelte";
  import MdLock from "svelte-icons/md/MdLock.svelte";
  import MdRefresh from "svelte-icons/md/MdRefresh.svelte";
  import MdSecurity from "svelte-icons/md/MdSecurity.svelte";
  import MdSettings from "svelte-icons/md/MdSettings.svelte";
  import MdBackup from "svelte-icons/md/MdBackup.svelte";

  export let id;
  export let title;
  export let desc;

  import { inview } from "svelte-inview";

  const options = {
    rootMargin: "-100px",
    unobserveOnEnter: true,
  };

  let isInView;
</script>

<div
  class="pt-6"
  use:inview={options}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  <div
    class={`flow-root bg-gray-50 rounded-lg px-6 pb-8 transition-all duration-700 ${
      isInView ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
    }`}
  >
    <div class="-mt-6">
      <div>
        <span
          class={`inline-flex items-center justify-center bg-gradient-to-b from-teal-500 to-cyan-600 rounded-md shadow-lg text-white h-12 w-12 p-3 transition-all duration-700 delay-300 ${
            isInView ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          {#if id === 1}
            <MdFastForward />
          {:else if id === 2}
            <MdLock />
          {:else if id === 3}
            <MdRefresh />
          {:else if id === 4}
            <MdSecurity />
          {:else if id === 5}
            <MdSettings />
          {:else}
            <MdBackup />
          {/if}
        </span>
      </div>
      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">
        {title}
      </h3>
      <p class="mt-5 text-base text-gray-500">
        {desc}
      </p>
    </div>
  </div>
</div>
